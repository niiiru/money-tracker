from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import users, transactions
from .database import init_db

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Init database on startup
@app.on_event("startup")
async def startup_event():
    await init_db()

#  Include routes 
app.include_router(users.router, prefix="/users")
app.include_router(transactions.router)
