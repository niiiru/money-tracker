from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    id: str
    username: str

from pydantic import BaseModel
from typing import Optional

# For creating new transactions
class TransactionCreate(BaseModel):
    type: str  # "income" or "spending"
    category: str
    amount: float
    description: Optional[str] = None
    date: str

# For returning transactions from the API
class TransactionOut(TransactionCreate):
    id: str
    user_id: str

from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str

