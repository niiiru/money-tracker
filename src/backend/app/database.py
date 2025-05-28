from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING
from dotenv import load_dotenv

import os

# Load environment variables from .env file
load_dotenv()


# Get MongoDB connection string from environment variable
MONGO_URL = os.getenv("MONGODB_URL")

# Create the async client and select DB
print("URL:", MONGO_URL)

client = AsyncIOMotorClient(MONGO_URL)
db = client.money_tracker

# Called on FastAPI startup to ensure indexes exist
async def init_db():
    # Create unique index on username field
    await db.users.create_index([("username", ASCENDING)], unique=True)

    # Optional: create index on user_id in transactions (for speed)
    await db.transactions.create_index([("user_id", ASCENDING)])
