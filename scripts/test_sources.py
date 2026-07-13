from app.rag.retriever import retrieve

results = retrieve("How does FastAPI handle requests?")

for doc, meta, distance in zip(
    results["documents"],
    results["metadatas"],
    results["distances"]
):
    print("=" * 80)
    print("File:", meta["path"])
    print("Distance:", distance)
    print(doc[:200])