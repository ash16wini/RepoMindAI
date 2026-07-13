from app.repository.loader import load_repository
from app.repository.chunker import chunk_documents
from app.embeddings.embedder import create_embeddings

docs = load_repository("repositories/fastapi")

chunks = chunk_documents(docs)

embeddings = create_embeddings(chunks[:10])

print("Chunks:", len(chunks))
print("Embeddings:", len(embeddings))
print("Vector Size:", len(embeddings[0]))