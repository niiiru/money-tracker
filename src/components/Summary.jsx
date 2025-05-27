function Summary({ transactions }) {
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const spending = transactions
    .filter((tx) => tx.type === "spending")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = income - spending;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3>Summary</h3>
      <p> Balance: {balance.toFixed(2)} €</p>
      <p> Income: {income.toFixed(2)} €</p>
      <p> Spending: {spending.toFixed(2)} €</p>
    </div>
  );
}

export default Summary;
