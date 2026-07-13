from fastapi import APIRouter
from pydantic import BaseModel

from app.services.chat_service import chat_service

from app.repository.github_loader import clone_repository
from app.repository.loader import load_repository
from app.repository.chunker import chunk_documents
from app.embeddings.embedder import create_embeddings
from app.vectorstore.chroma_store import store_embeddings

from app.services.repository_service import repository_service

router = APIRouter()


class ChatRequest(BaseModel):
    repository: str
    question: str


class RepositoryRequest(BaseModel):
    url: str


@router.post("/chat")
def chat(request: ChatRequest):

    result = chat_service(
    request.repository,
    request.question
)

    return {
        "question": request.question,
        "answer": result["answer"],
        "sources": result["sources"]
    }


@router.post("/load-repository")
def load_repository_api(request: RepositoryRequest):

    print("=" * 50)
    print("Received URL:", repr(request.url))
    print("=" * 50)

    return repository_service(request.url)