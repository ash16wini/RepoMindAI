from app.repository.loader import load_repository
from app.repository.chunker import chunk_documents

docs = load_repository("repositories/fastapi")

chunks = chunk_documents(docs)

print("Files :", len(docs))
print("Chunks:", len(chunks))

print()
print(chunks[0]["path"])
print()
print(chunks[0]["content"][:300])