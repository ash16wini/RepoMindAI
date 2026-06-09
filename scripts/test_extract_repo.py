from app.tools.github_tool import extract_github_repo

owner, repo = extract_github_repo(
    "Analyze this repository https://github.com/fastapi/fastapi"
)

print(owner)
print(repo)