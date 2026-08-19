#!/usr/bin/env python3
"""
Refresh GitHub star counts for every project entry in src/data/academic.ts
that has a `repoUrl` pointing at github.com/Hylouis233/<repo>.

The script is idempotent: it preserves everything else in the file, only
updates (or inserts once if missing) the `stars: N,` line for each project
entry that exposes a public Hylouis233 repo URL.

Auth: uses the `GITHUB_TOKEN` env var (provided automatically by
GitHub Actions). When run locally with `gh auth login`, you can either
export `GITHUB_TOKEN=$(gh auth token)` or just rely on `gh api`'s
auto-auth (handled by the GITHUB_TOKEN fallback).
"""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

OWNER = "Hylouis233"
ACADEMIC_TS = Path(__file__).resolve().parent.parent / "src" / "data" / "academic.ts"

# Match a full project entry block from `  {` to the next `  },` at column 2.
# The lookbehind (?<=\n) anchors the match to the start of a line so we
# never match a property named `key:` inside another project.
ENTRY_RE = re.compile(
    r"(?<=\n)(  \{\n    key: '([^']+)',.*?\n  \},)",
    re.DOTALL,
)
REPO_RE = re.compile(r"^https?://github\.com/" + re.escape(OWNER) + r"/([^/\s]+?)/?$")
STARS_RE = re.compile(r"^\s{4}stars:\s*(\d+),\s*$", re.MULTILINE)


def fetch_star(repo: str) -> int | None:
    """Query GitHub for the current stargazers_count of a public repo.

    Returns None if the repo is missing, private, or the API call fails.
    Raises on rate-limit so the caller can back off.
    """
    token = os.environ.get("GITHUB_TOKEN", "").strip()
    cmd = [
        "gh", "api",
        f"repos/{OWNER}/{repo}",
        "--jq", "{stars: .stargazers_count, private: .private}",
    ]
    env = os.environ.copy()
    if token:
        env["GITHUB_TOKEN"] = token
    proc = subprocess.run(
        cmd, capture_output=True, text=False, env=env, timeout=30
    )
    if proc.returncode != 0:
        stderr = proc.stderr.decode("utf-8", errors="replace")
        if "rate limit" in stderr.lower():
            raise RuntimeError(f"rate limited on {repo}: {stderr[:200]}")
        return None  # private / 404 / etc.
    try:
        payload = json.loads(proc.stdout.decode("utf-8", errors="replace"))
    except json.JSONDecodeError:
        return None
    if payload.get("private"):
        return None
    return payload.get("stars")


def update_entry(entry: str, key: str, url: str, stars: int) -> tuple[str, bool]:
    """Return (new_entry_block, did_change)."""
    if not REPO_RE.match(url):
        return entry, False
    new_line = f"    stars: {stars},\n"
    existing = STARS_RE.search(entry)
    if existing:
        old_stars = int(existing.group(1))
        if old_stars == stars:
            return entry, False
        new_entry = STARS_RE.sub(new_line.rstrip("\n"), entry, count=1)
        return new_entry, new_entry != entry
    # No existing stars line. Insert before one of the known anchors, or
    # before the closing brace as a last resort.
    for anchor in ("    tags:", "    relatedPublicationTitles:"):
        idx = entry.find(anchor)
        if idx != -1:
            new_entry = entry[:idx] + new_line + entry[idx:]
            return new_entry, True
    closing = "\n  },"
    idx = entry.rfind(closing)
    if idx == -1:
        return entry, False
    new_entry = entry[:idx] + new_line + entry[idx:]
    return new_entry, True


def main() -> int:
    if not ACADEMIC_TS.exists():
        print(f"[update-stars] academic.ts not found at {ACADEMIC_TS}", file=sys.stderr)
        return 1
    original = ACADEMIC_TS.read_text(encoding="utf-8")

    entries = list(ENTRY_RE.finditer(original))
    if not entries:
        print("[update-stars] no project entries matched; aborting", file=sys.stderr)
        return 1
    print(f"[update-stars] found {len(entries)} project entries")

    new_text = original
    changes: list[str] = []
    total_stars = 0
    fetched: list[tuple[str, int]] = []
    for m in reversed(entries):  # reverse to keep offsets valid as we splice
        full = m.group(1)
        key = m.group(2)
        url_match = re.search(r"^\s{4}repoUrl:\s*'([^']+)'", full, re.MULTILINE)
        if not url_match:
            continue
        url = url_match.group(1)
        repo_match = REPO_RE.match(url)
        if not repo_match:
            continue
        repo = repo_match.group(1)
        try:
            stars = fetch_star(repo)
        except RuntimeError as exc:
            if "rate limit" in str(exc).lower():
                print("[update-stars] rate limited; sleeping 30s", file=sys.stderr)
                time.sleep(30)
                stars = fetch_star(repo)
            else:
                raise
        if stars is None:
            print(f"[update-stars] {key}: no stars (private or 404)")
            continue
        fetched.append((key, stars))
        total_stars += stars
        new_block, changed = update_entry(full, key, url, stars)
        if not changed:
            # No change because (a) old stars value equals new value, or
            # (b) entry had no anchor. Distinguish the two for clarity.
            existing = STARS_RE.search(full)
            if existing and int(existing.group(1)) == stars:
                print(f"[update-stars] {key}: unchanged ({stars} stars)")
            else:
                print(f"[update-stars] {key}: no edit anchor; skipped")
            continue
        new_text = new_text[: m.start(1)] + new_block + new_text[m.end(1):]
        changes.append(f"{key}: {int(STARS_RE.search(full).group(1))} -> {stars} stars")

    if not changes:
        print("[update-stars] no changes; nothing to commit")
        return 0

    ACADEMIC_TS.write_text(new_text, encoding="utf-8")
    print(f"[update-stars] updated {len(changes)} entries")
    for line in changes:
        print(f"  - {line}")
    print(f"[update-stars] cumulative stars across fetched repos: {total_stars}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
