def user_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "username": user["username"],
    }
def transaction_helper(tx) -> dict:
    return {
        "id": str(tx["_id"]),
        "user_id": tx["user_id"],
        "type": tx["type"],
        "category": tx["category"],
        "amount": tx["amount"],
        "description": tx.get("description"),
        "date": tx["date"],
    }
