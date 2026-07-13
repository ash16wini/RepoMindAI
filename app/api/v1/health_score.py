from fastapi import APIRouter
from pydantic import BaseModel

from app.services.health_service import calculate_health_score

router = APIRouter()


class HealthRequest(BaseModel):
    repository: str


@router.post("/health-score")
def health_score(request: HealthRequest):

    repo_path = f"repositories/{request.repository}"

    return calculate_health_score(repo_path)