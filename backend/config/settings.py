# backend/config/settings.py
import os
from dotenv import load_dotenv

load_dotenv() # Idhu dhaan .env file-a load pannum

class Config:
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/genvital_db")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "a_very_secure_and_long_key")