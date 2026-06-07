from fastapi import FastAPI

from app.api.v1.router import api_router
from app.config.settings import settings

app = FastAPI(
    title=settings.app_name,
    description="AI-powered multi-agent developer productivity assistant",
    version=settings.app_version
)

app.include_router(
    api_router,
    prefix="/api/v1"
)