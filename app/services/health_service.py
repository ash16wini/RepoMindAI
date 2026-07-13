from app.repository.analyzer import analyze_repository


def calculate_health_score(repo_path: str):

    stats = analyze_repository(repo_path)

    files = stats["files"]
    functions = stats["functions"]
    classes = stats["classes"]

    score = 100

    # Too many functions per file
    if files > 0:
        avg_functions_per_file = functions / files
        if avg_functions_per_file > 5:
            score -= 10
    else:
        avg_functions_per_file = 0

    # Too many functions per class
    if classes > 0:
        avg_functions_per_class = functions / classes
        if avg_functions_per_class > 10:
            score -= 10
    else:
        avg_functions_per_class = 0

    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    else:
        grade = "D"

    return {
        "health_score": score,
        "grade": grade,
        "statistics": stats,
        "avg_functions_per_file": round(avg_functions_per_file, 2),
        "avg_functions_per_class": round(avg_functions_per_class, 2)
    }