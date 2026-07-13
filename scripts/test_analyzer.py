from app.repository.analyzer import analyze_repository

stats = analyze_repository(
    "repositories/fastapi"
)

print(stats)