from app.models.gemini import generate_response

response = generate_response(
    "Explain what FastAPI is in 2 lines."
)

print(response)