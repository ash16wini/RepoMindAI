from app.repository.loader import load_repository
from app.repository.chunker import chunk_documents
from app.embeddings.embedder import create_embeddings
from app.vectorstore.chroma_store import store_embeddings

docs = load_repository("repositories/fastapi")

chunks = chunk_documents(docs)

print("Total Chunks:", len(chunks))

BATCH_SIZE = 10

for i in range(0, len(chunks), BATCH_SIZE):

    batch = chunks[i:i+BATCH_SIZE]

    embeddings = create_embeddings(batch)

    store_embeddings(
        batch,
        embeddings,
        start_index=i
    )

    print(f"Stored {i + len(batch)} / {len(chunks)}")

print("Done!")