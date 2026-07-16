from google import genai
from app.config.settings import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_answer(prompt: str):
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        return response.text

    except Exception as e:
        print("Gemini Error:", e)

        return """
⚠️ Gemini is temporarily unavailable.

This usually happens when Google's servers are under heavy load.

Please try again in a few seconds.
"""