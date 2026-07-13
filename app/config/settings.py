import os
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

MODEL_NAME = "all-MiniLM-L6-v2"

BATCH_SIZE = 16

EMBED_BATCH_SIZE = 2

COLLECTION_PREFIX = "repo_"