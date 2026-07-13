from app.repository.summary import summarize_repository

result = summarize_repository(
    "repositories/fastapi"
)

print(result["statistics"])
print()
print(result["summary"])