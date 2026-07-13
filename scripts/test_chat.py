from app.rag.chat import chat_with_repository

question = "How does FastAPI handle requests?"

answer = chat_with_repository(question)

print(answer)