
import requests
import base64

def get_repo_info(owner: str, repo: str):
    url = f"https://api.github.com/repos/{owner}/{repo}"

    response = requests.get(url)

    if response.status_code != 200:
        return {
            "error": "Repository not found"
        }

    data = response.json()

    return {
        "name": data["name"],
        "owner": data["owner"]["login"],
        "description": data["description"],
        "stars": data["stargazers_count"],
        "forks": data["forks_count"],
        "language": data["language"],
        "url": data["html_url"]
    }



def get_repo_readme(owner: str, repo: str):
    url = f"https://api.github.com/repos/{owner}/{repo}/readme"

    response = requests.get(url)

    if response.status_code != 200:
        return None

    data = response.json()

    content = base64.b64decode(
        data["content"]
    ).decode("utf-8")

    return content

def parse_github_url(url: str):
    parts = url.rstrip("/").split("/")

    owner = parts[-2]
    repo = parts[-1]

    return owner, repo