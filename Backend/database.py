from sqlalchemy import create_engine
from dotenv import load_dotenv
import os

load_dotenv("Backend/.env")

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL.replace("postgresql://", "postgresql+psycopg2://"))