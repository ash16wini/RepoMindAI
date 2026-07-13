import ast
from pathlib import Path


def build_dependency_graph(repo_path: str):

    graph = {}

    root = Path(repo_path)

    for file in root.rglob("*.py"):

        try:
            tree = ast.parse(file.read_text(
                encoding="utf-8",
                errors="ignore"
            ))

            imports = []

            for node in ast.walk(tree):

                if isinstance(node, ast.Import):

                    for alias in node.names:
                        imports.append(alias.name)

                elif isinstance(node, ast.ImportFrom):

                    if node.module:
                        imports.append(node.module)

            graph[str(file)] = imports

        except Exception:
            continue

    return graph