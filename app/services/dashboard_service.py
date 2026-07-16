from app.services.health_service import calculate_health
from app.repository.summary import summarize_repository
from app.repository.architecture_summary import summarize_architecture
from app.repository.dependency_summary import summarize_dependencies
from app.services.insight_service import generate_insights


def dashboard_service(repository: str):

    repo_path = f"repositories/{repository}"

    health = calculate_health(repo_path)

    summary = summarize_repository(repo_path)

    architecture = summarize_architecture(repo_path)

    dependency = summarize_dependencies(repo_path)

    insights = generate_insights(repo_path)

    return {
    "repository": repository,
    "health": health,
    "summary": summary,
    "architecture": architecture,
    "dependency": dependency,
    "insights": insights
}