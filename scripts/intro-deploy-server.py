#!/usr/bin/python3
"""Forced SSH command for publishing this repository's static intro site."""
import fcntl
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import socket
import sys
import tarfile
import tempfile
import time

BASE = Path('/var/www/intro-deploy')
MAX_ARCHIVE = 64 * 1024 * 1024
MAX_CONTENT = 512 * 1024 * 1024
MAX_ENTRIES = 20000


def unpack(archive, destination):
    total = 0
    files = set()
    with tarfile.open(fileobj=archive, mode='r|gz') as bundle:
        for count, member in enumerate(bundle, 1):
            path = PurePosixPath(member.name)
            if path == PurePosixPath('.') and member.isdir():
                continue
            if (count > MAX_ENTRIES or path.is_absolute() or '..' in path.parts
                    or '\\' in member.name or not path.parts):
                raise ValueError('Invalid archive path or too many entries')
            target = destination.joinpath(*path.parts)
            if member.isdir():
                target.mkdir(parents=True, exist_ok=True)
                target.chmod(0o755)
            elif member.isfile():
                total += member.size
                if total > MAX_CONTENT or path in files:
                    raise ValueError('Archive too large or duplicate file')
                files.add(path)
                target.parent.mkdir(parents=True, exist_ok=True)
                with bundle.extractfile(member) as source, target.open('xb') as output:
                    shutil.copyfileobj(source, output)
                target.chmod(0o644)
            else:
                raise ValueError('Only regular files and directories are permitted')
    if not (destination / 'index.html').is_file():
        raise ValueError('The static site must contain index.html')


def publish(stream, run_id):
    with (BASE / '.deploy.lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        release = BASE / 'releases' / (run_id + '-' + str(time.time_ns()))
        release.mkdir(mode=0o755)
        pending_link = BASE / ('.current-' + release.name)
        activated = False
        try:
            with tempfile.TemporaryFile() as archive:
                size = 0
                while True:
                    chunk = stream.read(1024 * 1024)
                    if not chunk:
                        break
                    size += len(chunk)
                    if size > MAX_ARCHIVE:
                        raise ValueError('Compressed archive too large')
                    archive.write(chunk)
                archive.seek(0)
                unpack(archive, release)
            pending_link.symlink_to(Path('releases') / release.name)
            os.replace(pending_link, BASE / 'current')
            activated = True
            print('DEPLOYED release=' + release.name, flush=True)
        finally:
            if pending_link.is_symlink():
                pending_link.unlink()
            if not activated:
                shutil.rmtree(release)


def main():
    os.umask(0o022)
    command = os.environ.get('SSH_ORIGINAL_COMMAND', '')
    if command == 'intro-status':
        print('SSH_OK ' + socket.gethostname())
        print('DEPLOY_UID=' + str(os.getuid()))
        return 0
    match = re.fullmatch(r'intro-deploy ([0-9]{1,20})', command)
    if not match:
        print('DEPLOY_ONLY: use intro-status or intro-deploy <run-id>', file=sys.stderr)
        return 126
    try:
        publish(sys.stdin.buffer, match[1])
    except (OSError, ValueError, tarfile.TarError) as error:
        print('DEPLOY_REJECTED: ' + str(error), file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
