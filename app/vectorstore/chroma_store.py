import re
import chromadb

client = chromadb.PersistentClient(path="chroma_db")


def sanitize_collection_name(name: str) -> str:
    """
    Sanitize repository names to make them valid ChromaDB collection names.

    Rules:
    - Only letters, numbers, dots, underscores, and hyphens
    - Must start and end with a letter or number
    - Length must be between 3 and 512 characters
    """

    # Replace invalid characters with "_"
    name = re.sub(r"[^a-zA-Z0-9._-]", "_", name)

    # Remove invalid starting/ending characters
    name = name.strip("._-")

    # Ensure minimum length
    if len(name) < 3:
        name += "_repo"

    # Ensure maximum length
    return name[:512]


def get_collection(repo_name: str):
    """
    Create or open a collection for a specific repository.
    """

    repo_name = sanitize_collection_name(repo_name)

    return client.get_or_create_collection(
        name=repo_name
    )


def store_embeddings(
    repo_name,
    chunks,
    embeddings,
    start_index=0
):

    repo_name = sanitize_collection_name(repo_name)

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

    repo_name = sanitize_collection_name(repo_name)

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