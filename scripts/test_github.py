from app.tools.github_tool import (
    get_repo_info,
    get_repo_readme
)

info = get_repo_info(
    "fastapi",
    "fastapi"
)

readme = get_repo_readme(
    "fastapi",
    "fastapi"
)

print(info)

print("\nREADME Preview:\n")

print(readme[:1000])