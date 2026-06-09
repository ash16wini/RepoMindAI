from app.models.gemini import generate_response
from app.memory.store import conversation_memory
from app.graph.state import AgentState
from app.agents.repo_agent import repo_agent

def router_node(state: AgentState) -> AgentState:
    query = state["user_query"].lower()

    if "github" in query:
        state["intent"] = "github"
    elif "code" in query:
        state["intent"] = "coding"
    else:
        state["intent"] = "general"

    return state


def response_node(state):
    response = generate_response(state["user_query"])

    state["response"] = response
    return state

def memory_node(state):
    conversation_memory.append(state["user_query"])

    state["memory"] = (
        conversation_memory[-3:]
        if len(conversation_memory) >= 3
        else conversation_memory
    )

    return state

def repo_analysis_node(state):
    owner = state.get("owner")
    repo = state.get("repo")

    if owner and repo:
        state["response"] = repo_agent(owner, repo)

    return state