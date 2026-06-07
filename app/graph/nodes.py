from app.graph.state import AgentState


def router_node(state: AgentState) -> AgentState:
    query = state["user_query"]

    if "github" in query.lower():
        state["intent"] = "github"

    else:
        state["intent"] = "general"

    return state