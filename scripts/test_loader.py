from app.repository.loader import load_repository

docs = load_repository("repositories/fastapi")

print(f"Files Loaded: {len(docs)}")

print()

print("First File:")
print(docs[0]["path"])

print()

print(docs[0]["content"][:500])