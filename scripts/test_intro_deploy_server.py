"""Security regressions for the forced-command static deployment protocol."""
import importlib.util
import io
from pathlib import Path
import tarfile
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('deploy', Path(__file__).with_name('intro-deploy-server.py'))
deploy = importlib.util.module_from_spec(spec)
spec.loader.exec_module(deploy)


def bundle(name='index.html', link=None):
    data = io.BytesIO()
    with tarfile.open(fileobj=data, mode='w:gz') as output:
        info = tarfile.TarInfo(name)
        if link:
            info.type = tarfile.SYMTYPE
            info.linkname = link
            output.addfile(info)
        else:
            content = b'<html>release</html>'
            info.size = len(content)
            output.addfile(info, io.BytesIO(content))
    data.seek(0)
    return data


class DeploymentSecurity(unittest.TestCase):
    def test_publish_activates_complete_release(self):
        with tempfile.TemporaryDirectory() as root:
            base = Path(root)
            (base / 'releases').mkdir()
            with patch.object(deploy, 'BASE', base):
                deploy.publish(bundle(), '123')
            self.assertEqual((base / 'current' / 'index.html').read_bytes(), b'<html>release</html>')

    def test_rejects_traversal_absolute_paths_and_links_without_switching(self):
        for name, link in [('../escape', None), ('/tmp/escape', None), ('index.html', '/etc/passwd')]:
            with self.subTest(name=name, link=link), tempfile.TemporaryDirectory() as root:
                base = Path(root)
                old = base / 'releases' / 'old'
                old.mkdir(parents=True)
                (base / 'current').symlink_to(old)
                with patch.object(deploy, 'BASE', base), self.assertRaises(ValueError):
                    deploy.publish(bundle(name, link), '124')
                self.assertEqual((base / 'current').resolve(), old.resolve())
                self.assertEqual(list((base / 'releases').iterdir()), [old])

    def test_rejects_arbitrary_and_injected_ssh_commands(self):
        for command in ['', 'id', 'bash', 'intro-status; id', 'intro-deploy 1; id', 'internal-sftp']:
            with self.subTest(command=command), patch.dict('os.environ', SSH_ORIGINAL_COMMAND=command):
                self.assertEqual(deploy.main(), 126)

    def test_archive_limit_preserves_current_release(self):
        with tempfile.TemporaryDirectory() as root:
            base = Path(root)
            (base / 'releases').mkdir()
            with patch.object(deploy, 'BASE', base), patch.object(deploy, 'MAX_ARCHIVE', 1), self.assertRaises(ValueError):
                deploy.publish(bundle(), '125')
            self.assertFalse((base / 'current').exists())
            self.assertEqual(list((base / 'releases').iterdir()), [])


if __name__ == '__main__':
    unittest.main()
