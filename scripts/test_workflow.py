from app.graph.workflow import run_workflow

queries = [
    "Show me GitHub repositories",
    "Create Python code",
    "Explain FastAPI"
]

for q in queries:
    result = run_workflow(q)
    print(result)