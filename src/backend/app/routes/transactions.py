from fastapi import APIRouter, Depends
from bson import ObjectId
from .. import database, schemas, models, main
from ..auth import get_current_user

router = APIRouter()

@router.post("/transactions", response_model=schemas.TransactionOut)
async def create_transaction(
    tx: schemas.TransactionCreate,
    current_user: dict = Depends(get_current_user)
):
    user_id = str(current_user["_id"])
    new_tx = tx.dict()
    new_tx["user_id"] = user_id

    result = await database.db.transactions.insert_one(new_tx)
    saved_tx = await database.db.transactions.find_one({"_id": result.inserted_id})
    return models.transaction_helper(saved_tx)

@router.get("/transactions", response_model=list[schemas.TransactionOut])
async def get_user_transactions(current_user: dict = Depends(get_current_user)):
    user_id = str(current_user["_id"])
    transactions = []
    cursor = database.db.transactions.find({"user_id": user_id})
    async for tx in cursor:
        transactions.append(models.transaction_helper(tx))
    return transactions
