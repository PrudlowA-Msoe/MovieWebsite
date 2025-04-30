# app/routes.py
from fastapi import APIRouter, Depends, HTTPException
from .db import get_db
from .pipelines import PIPELINES

router = APIRouter(prefix="/api")

@router.get("/query/{slug}")
async def run_query(slug: str, db = Depends(get_db)):
    if slug not in PIPELINES:
        raise HTTPException(404, "Unknown query")
    cursor = db.recordings.aggregate(PIPELINES[slug])
    return [doc async for doc in cursor]

@router.get("/categories")
async def categories(db = Depends(get_db)):
    return await db.categories.find().to_list(length=None)

@router.get("/actors/{name}")
async def actor_detail(name: str, db = Depends(get_db)):
    return await db.actors.find_one({"name": name})
