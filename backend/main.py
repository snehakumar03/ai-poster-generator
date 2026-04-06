from fastapi import FastAPI
from routes import upload, generate

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend running 🚀"}

app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(generate.router, prefix="/generate", tags=["Generate"])