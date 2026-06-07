from fastapi import FastAPI

app = FastAPI(
    title="RepoMindAI",
    description="AI-powered multi-agent developer productivity assistant",
    version="0.1.0"
)


@app.get("/")
def root():
    return {"message": "Welcome to RepoMindAI 🚀"}