import chromadb

client = chromadb.PersistentClient(path="chroma_db")


def get_collection(repo_name: str):
    """
    Create or open a collection for a specific repository.
    """
    return client.get_or_create_collection(
        name=repo_name
    )


def store_embeddings(
    repo_name,
    chunks,
    embeddings,
    start_index=0
):

    collection = get_collection(repo_name)

    ids = []
    documents = []
    metadatas = []
    vectors = []

    for i, chunk in enumerate(chunks):

        ids.append(str(start_index + i))

        documents.append(chunk["content"])

        metadatas.append({
            "path": chunk["path"]
        })

        vectors.append(
            embeddings[i].tolist()
        )

    try:
        collection.add(
            ids=ids,
            documents=documents,
            metadatas=metadatas,
            embeddings=vectors
        )

        print(f"Added {len(ids)} vectors to {repo_name}")
        print("Collection Count:", collection.count())

    except Exception as e:
        print("STORE EMBEDDINGS FAILED")
        print(type(e).__name__)
        print(str(e))
        raise


def search(
    repo_name,
    query_embedding,
    k=5
):

    collection = get_collection(repo_name)
    print("Final Count:", collection.count())

    return collection.query(
        query_embeddings=[
            query_embedding.tolist()
        ],
        n_results=k,
        include=[
            "documents",
            "metadatas",
            "distances"
        ]
    )