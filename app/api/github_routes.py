from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class RepoRequest(BaseModel):
    url: str


@router.post("/load-repository")
def load_repository(request: RepoRequest):

    return {
        "status": "received",
        "repository": request.url
    }