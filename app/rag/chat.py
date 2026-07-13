from app.rag.retriever import retrieve
from app.rag.prompt import build_prompt
from app.models.gemini import generate_answer


def chat_with_repository(repo_name: str, question: str):

    results = retrieve(
        repo_name=repo_name,
        query=question
    )

    documents = results["documents"]
    metadatas = results["metadatas"]
    distances = results["distances"]

    context = ""

    sources = []

    for doc, meta, distance in zip(
        documents,
        metadatas,
        distances
    ):

        context += f"""
File:
{meta['path']}

{doc}

--------------------------------------------------

"""

        sources.append({
            "file": meta["path"],
            "score": round(1 - distance, 3)
        })

    prompt = build_prompt(
        question,
        context
    )

    answer = generate_answer(prompt)

    return {
        "answer": answer,
        "sources": sources
    }