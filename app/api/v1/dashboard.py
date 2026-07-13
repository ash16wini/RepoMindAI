from fastapi import APIRouter
from pydantic import BaseModel

from app.services.dashboard_service import dashboard_service

router = APIRouter()


class DashboardRequest(BaseModel):
    repository: str


@router.post("/dashboard")
def dashboard(request: DashboardRequest):

    return dashboard_service(
        request.repository
    )