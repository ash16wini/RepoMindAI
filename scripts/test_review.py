from app.repository.code_review import review_repository

report = review_repository(
    "repositories/fastapi"
)

print(report)