from app.graph.workflow import run_workflow

queries = [
    "Analyze this repository https://github.com/fastapi/fastapi"
]

for q in queries:
    result = run_workflow(q)
    print(result)