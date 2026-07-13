from app.repository.architecture import repository_structure
from app.models.gemini import generate_answer


def summarize_architecture(repo_path):

    tree = repository_structure(repo_path)

    prompt = f"""
You are a senior software architect.

Analyze this repository structure.

Repository:

{tree}

Explain

1. Architecture
2. Folder responsibilities
3. Design pattern
4. Layer separation
5. Suggestions

Return professional markdown.
"""

    return generate_answer(prompt)