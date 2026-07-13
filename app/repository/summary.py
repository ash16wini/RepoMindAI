from app.repository.analyzer import analyze_repository
from app.models.gemini import generate_answer


def summarize_repository(repo_path: str):

    stats = analyze_repository(repo_path)

    prompt = f"""
You are an expert software architect.

Analyze this repository statistics and write a professional summary.

Repository Statistics:

Files: {stats['files']}
Functions: {stats['functions']}
Classes: {stats['classes']}

Generate:

1. Repository Overview
2. Possible Purpose
3. Codebase Size
4. Complexity
5. Suggestions for Developers

Keep the answer professional.
"""

    summary = generate_answer(prompt)

    return {
        "statistics": stats,
        "summary": summary
    }