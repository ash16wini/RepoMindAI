from git import Repo
import os


def clone_repository(url: str):
    repo_name = url.rstrip("/").split("/")[-1]
    destination = os.path.join("repositories", repo_name)

    # If already cloned, don't clone again
    if os.path.exists(destination):
        print("Repository already exists.")
        return destination

    print("Cloning repository...")
    Repo.clone_from(url, destination)

    print("Clone completed.")
    return destination