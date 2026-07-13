from pathlib import Path
import ast


def analyze_repository(repo_path: str):

    python_files = list(Path(repo_path).rglob("*.py"))

    total_functions = 0
    total_classes = 0

    for file in python_files:

        try:
            tree = ast.parse(
                file.read_text(
                    encoding="utf-8",
                    errors="ignore"
                )
            )

            for node in ast.walk(tree):

                if isinstance(node, ast.FunctionDef):
                    total_functions += 1

                elif isinstance(node, ast.ClassDef):
                    total_classes += 1

        except Exception:
            pass

    return {
        "files": len(python_files),
        "functions": total_functions,
        "classes": total_classes
    }