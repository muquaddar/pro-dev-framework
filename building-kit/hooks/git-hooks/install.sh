#!/usr/bin/env bash
# Install PDF git hooks into the current repo.
# Idempotent: re-running replaces existing hook files.

set -e
ROOT="$(git rev-parse --show-toplevel)"
SRC="$(cd "$(dirname "$0")" && pwd)"

mkdir -p "$ROOT/.git/hooks"

for hook in pre-commit post-commit; do
  cp "$SRC/$hook" "$ROOT/.git/hooks/$hook"
  chmod +x "$ROOT/.git/hooks/$hook"
  echo "✓ installed .git/hooks/$hook"
done

echo "Done. Bypass any single commit with: git commit --no-verify"
