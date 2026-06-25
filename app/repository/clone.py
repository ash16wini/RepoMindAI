from git import Repo
import os


def clone_repository(owner: str, repo: str):
    repo_url = f"https://github.com/{owner}/{repo}.git"

    save_path = os.path.join("repositories", repo)

    if os.path.exists(save_path):
        return save_path

    Repo.clone_from(repo_url, save_path)

    return save_path