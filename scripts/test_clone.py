from app.repository.clone import clone_repository

path = clone_repository(
    "fastapi",
    "fastapi"
)

print(path)