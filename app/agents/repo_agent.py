from app.tools.repo_analyzer import analyze_repository


def repo_agent(owner: str, repo: str):
    result = analyze_repository(owner, repo)
    return result