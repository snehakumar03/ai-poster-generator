from fastapi import APIRouter
from services.ai_service import generate_prompt

router = APIRouter()

@router.post("/")
async def generate(data: dict):
    product = data.get("product")
    style = data.get("style")

    prompt = generate_prompt(product, style)

    return {
        "prompt": prompt,
        "message": "Poster generation initiated"
    }