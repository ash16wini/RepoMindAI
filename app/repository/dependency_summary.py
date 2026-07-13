from app.repository.dependency_graph import build_dependency_graph
from app.models.gemini import generate_answer


def summarize_dependencies(repo_path):

    graph = build_dependency_graph(repo_path)

    text = ""

    for file, imports in graph.items():

        text += f"\nFile: {file}\n"

        for module in imports:
            text += f"  -> {module}\n"

    prompt = f"""
You are a senior software architect.

Analyze these repository dependencies.

{text[:10000]}

Explain:

1. Architecture
2. Dependency flow
3. Core modules
4. Which modules are most important
5. Possible improvements
"""

    return generate_answer(prompt)