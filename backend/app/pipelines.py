# app/pipelines.py
"""Reusable aggregation stages."""
Q3_VIDEOS_PER_CAT = [
    {"$group": {"_id": "$category_id", "count": {"$sum": 1}}},
    {"$lookup": {
        "from": "categories",
        "localField": "_id",
        "foreignField": "_id",
        "as": "cat"}},
    {"$unwind": "$cat"},
    {"$project": {"_id": 0, "category": "$cat.name", "count": 1}},
    {"$sort": {"category": 1}}
]

# simply reuse and insert a $match for Q4
Q4_IN_STOCK = [{"$match": {"stock": {"$gt": 0}}}] + Q3_VIDEOS_PER_CAT

# … define Q5-Q9 similarly …

PIPELINES = {
    "videos_per_category": Q3_VIDEOS_PER_CAT,
    "in_stock_per_category": Q4_IN_STOCK,
    "categories_per_actor": Q5_CATS_PER_ACTOR,
    "actors_multiple_categories": Q6_ACTORS_MULTI,
    "actors_not_comedy": Q7_NOT_COMEDY,
    "actors_comedy_and_action": Q8_BOTH,
    "comedy_stock_by_director": Q9_COMEDY_STOCK,
}
