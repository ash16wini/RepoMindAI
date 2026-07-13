from app.repository.architecture import repository_structure
from app.models.gemini import generate_answer


def review_repository(repo_path):

    tree = repository_structure(repo_path)

    prompt = f"""
You are a senior software architect.

Review this repository.

Repository Structure

{tree[:12000]}

Generate a professional report.

Include

1. Overall Architecture
2. Folder Organization
3. Coding Practices
4. Scalability
5. Maintainability
6. Security Risks
7. Performance Risks
8. Refactoring Suggestions
9. Overall Rating (/10)

Return the report in markdown.
"""

    return generate_answer(prompt)