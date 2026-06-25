from app.graph.state import AgentState
from app.graph.nodes import (
    router_node,
    response_node,
    memory_node,
    repo_analysis_node,
)

def run_workflow(user_query: str):

    state: AgentState = {
        "user_query": user_query,
        "intent": None,
        "context": None,
        "response": None,
        "memory": None,
        "owner": None,
        "repo": None,
    }

    state = router_node(state)

    state = memory_node(state)

    if state["owner"] and state["repo"]:
        state = repo_analysis_node(state)
    else:
        state = response_node(state)

    return state