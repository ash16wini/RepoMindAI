from app.rag.prompt import build_prompt

context = """
FastAPI handles requests using routing and middleware.
"""

prompt = build_prompt(
    "How does FastAPI handle requests?",
    context
)

print(prompt)