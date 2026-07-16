from app.rag.retriever import retrieve
from app.models.gemini import generate_answer


def review_repository(repo_name: str):

    results = retrieve(
        repo_name=repo_name,
        query="Review this repository and suggest improvements.",
        n_results=8
    )

    context = "\n\n".join(results["documents"])

    prompt = f"""
You are a senior software architect.

Review this repository professionally.

Provide:

# Strengths

# Weaknesses

# Suggestions

Repository:

{context}

Return the answer in Markdown.
"""

    return {
        "review": generate_answer(prompt)
    }