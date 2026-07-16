from app.embeddings.embedder import model
from app.vectorstore.chroma_store import search, get_collection


def retrieve(
    repo_name: str,
    query: str,
    n_results=8
):

    query_embedding = model.encode(query)

    print("=" * 60)
    print("Repository Name:", repo_name)

    results = search(
        repo_name=repo_name,
        query_embedding=query_embedding,
        k=n_results
    )

    collection = get_collection(repo_name)
    print("Collection:", repo_name)
    print("Vector Count:", collection.count())
    print("=" * 60)



    documents = results["documents"][0]
    metadatas = results["metadatas"][0]
    distances = results["distances"][0]

    combined = list(zip(documents, metadatas, distances))

    combined.sort(
    key=lambda x: (
        "README" not in x[1]["path"].upper(),
        "docs" not in x[1]["path"].lower(),
        "examples" not in x[1]["path"].lower(),
        x[2]
    )
)

    documents = [x[0] for x in combined]
    metadatas = [x[1] for x in combined]
    distances = [x[2] for x in combined]

    return {
        "documents": documents,
        "metadatas": metadatas,
        "distances": distances
    }