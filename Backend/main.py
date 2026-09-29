from dotenv import load_dotenv
from fastapi import FastAPI
import os

load_dotenv("Backend/.env")

app = FastAPI()

@app.get("/")
def home():
    return {"message": f"{os.getenv('APP_NAME')} Backend is running"}