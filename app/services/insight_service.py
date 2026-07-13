from app.repository.analyzer import analyze_repository


def generate_insights(repo_path: str):

    stats = analyze_repository(repo_path)

    strengths = []
    risks = []
    recommendations = []

    if stats["classes"] > 100:
        strengths.append(
            "Well-structured object-oriented design."
        )

    if stats["functions"] / stats["files"] < 5:
        strengths.append(
            "Functions are well distributed across files."
        )

    if stats["files"] > 1000:
        risks.append(
            "Large repository may increase onboarding time."
        )

    if stats["functions"] > 3000:
        recommendations.append(
            "Consider generating architecture documentation."
        )

    return {
        "strengths": strengths,
        "risks": risks,
        "recommendations": recommendations
    }