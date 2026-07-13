from pathlib import Path


def repository_structure(repo_path: str):

    tree = []

    root = Path(repo_path)

    for path in root.rglob("*"):

        if ".git" in str(path):
            continue

        relative = path.relative_to(root)

        depth = len(relative.parts)

        indent = "    " * depth

        tree.append(
            f"{indent}{relative.name}"
        )

    return "\n".join(tree)