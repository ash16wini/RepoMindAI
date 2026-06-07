from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def root() -> dict:
    return {
        "message": "Welcome to RepoMindAI 🚀"
    }


@router.get("/health")
def health_check() -> dict:
    return {
        "status": "healthy"
    }