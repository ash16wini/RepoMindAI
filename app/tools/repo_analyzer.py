from app.tools.github_tool import (
    get_repo_info,
    get_repo_readme
)

from app.models.gemini import generate_response


def analyze_repository(owner: str, repo: str):

    info = get_repo_info(owner, repo)
    readme = get_repo_readme(owner, repo)

    prompt = f"""
Analyze this GitHub repository.

Repository Information:
{info}

README:
{readme[:5000]}

Provide:

1. Project Summary
2. Main Technologies
3. Key Features
4. Difficulty Level
5. Learning Value
6. Suggestions for Contributors
"""

    return generate_response(prompt)