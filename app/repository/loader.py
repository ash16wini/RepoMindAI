from pathlib import Path

SUPPORTED_FILES = {
    ".py",
    ".md",
}


def load_repository(repo_path: str):
    documents = []

    for file in Path(repo_path).rglob("*"):

        # Skip unsupported file types
        if file.suffix.lower() not in SUPPORTED_FILES:
            continue

        # Skip unnecessary folders
        if any(
            folder in file.parts
            for folder in [
                ".git",
                "__pycache__",
                "node_modules",
                ".venv",
                "venv",
                "tests",
            ]
        ):
            continue

        try:
            text = file.read_text(
                encoding="utf-8",
                errors="ignore",
            )

            documents.append(
                {
                    "path": str(file),
                    "content": text,
                }
            )

        except Exception:
            continue

    return documents