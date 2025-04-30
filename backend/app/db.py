# app/db.py
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import Depends
from .config import settings

client = AsyncIOMotorClient(settings.MONGO_URI)
db = client[settings.DB_NAME]

async def get_db():
    return db
