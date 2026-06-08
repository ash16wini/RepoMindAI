from app.graph.state import AgentState
from app.graph.nodes import (
    router_node,
    response_node,
    memory_node
)

def run_workflow(user_query: str):
    state: AgentState = {
        "user_query": user_query,
        "intent": None,
        "context": None,
        "response": None,
        "memory": None
    }

    state = router_node(state)
    state = memory_node(state)
    state = response_node(state)

    return state