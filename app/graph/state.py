from typing import TypedDict, Optional


class AgentState(TypedDict):
    user_query: str
    intent: Optional[str]
    context: Optional[str]
    response: Optional[str]