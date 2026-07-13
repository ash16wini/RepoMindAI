from app.repository.dependency_graph import build_dependency_graph

graph = build_dependency_graph(
    "repositories/fastapi"
)

for file, imports in list(graph.items())[:20]:

    print("=" * 70)
    print(file)

    for module in imports:
        print("   ->", module)