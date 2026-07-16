from fastapi import APIRouter
from pydantic import BaseModel

from app.services.health_service import calculate_health

router = APIRouter()


class HealthRequest(BaseModel):
    repository: str


@router.post("/health-score")
def health_score(request: HealthRequest):

    return calculate_health(
        request.repository
    )