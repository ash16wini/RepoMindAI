import chromadb

client = chromadb.PersistentClient(path="chroma_db")

try:
    client.delete_collection("fastapi")
    print("✅ Collection deleted")
except Exception as e:
    print(e)