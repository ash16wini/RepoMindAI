from app.rag.chat import chat_with_repository


def chat_service(repository: str, question: str):
    """
    Service layer for repository chat.
    """

    return chat_with_repository(
        repository,
        question
    )