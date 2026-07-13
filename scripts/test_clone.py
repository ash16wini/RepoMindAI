from app.repository.github_loader import clone_repository

path = clone_repository(
    "https://github.com/fastapi/fastapi"
)

print(path)