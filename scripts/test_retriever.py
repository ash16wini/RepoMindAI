from app.rag.retriever import retrieve

results = retrieve(
    "How does FastAPI handle requests?"
)

for i, doc in enumerate(results, 1):
    print("=" * 80)
    print(f"Result {i}")
    print(doc[:500])