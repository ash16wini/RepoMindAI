from app.tools.github_tool import parse_github_url

owner, repo = parse_github_url(
    "https://github.com/fastapi/fastapi"
)

print(owner)
print(repo)