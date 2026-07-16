from app.rag.retriever import retrieve
from app.models.gemini import generate_answer


def repository_summary(repo_name: str):

    results = retrieve(
        repo_name=repo_name,
        query="Explain this repository. What does it do?",
        n_results=8,
    )

    print("=" * 60)
    print("RETRIEVE RESULTS")
    print(results)
    print("=" * 60)

    documents = results["documents"]
    metadatas = results["metadatas"]
    distances = results["distances"]

    context = ""

    for doc, meta, distance in zip(
        documents,
        metadatas,
        distances,
    ):

        context += f"""
File:
{meta["path"]}

{doc}

----------------------------------------

"""

    prompt = f"""
You are an expert software architect.

Analyze the following repository and generate a professional summary.

Include:

1. Repository Purpose
2. Main Language
3. Framework (if any)
4. Key Features
5. Important Files
6. Suggested Starting File

Repository Context:
-------------------

{context}

-------------------

Return the answer in clean Markdown.
"""

    summary = generate_answer(prompt)

    return {
        "summary": summary
    }