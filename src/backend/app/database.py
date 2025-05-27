from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING

# MongoDB connection string (local)
MONGO_URL = "mongodb://localhost:27017"

# Create the async client and select DB
client = AsyncIOMotorClient(MONGO_URL)
db = client.money_tracker

# Called on FastAPI startup to ensure indexes exist
async def init_db():
    # Create unique index on username field
    await db.users.create_index([("username", ASCENDING)], unique=True)

    # Optional: create index on user_id in transactions (for speed)
    await db.transactions.create_index([("user_id", ASCENDING)])
