function TransactionList({ transactions }) {
  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <div>
      <h3>Transactions</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} style={{ textAlign: "center" }}>
              <td style={tdStyle}>{tx.date}</td>
              <td style={tdStyle}>
                {tx.type === "income" ? "Income" : "Spending"}
              </td>
              <td style={tdStyle}>{tx.category}</td>
              <td style={tdStyle}>
                {tx.type === "income" ? "+" : "-"}
                {tx.amount.toFixed(2)} €
              </td>
              <td style={tdStyle}>{tx.description || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Optional inline styles
// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   marginTop: "1.5rem",
//   fontSize: "1rem",
// };

const thStyle = {
  padding: "14px 10px",
  borderBottom: "2px solid #ccc",
  textAlign: "left",
  backgroundColor: "#f5f5f5",
};

const tdStyle = {
  padding: "12px 10px",
  borderBottom: "1px solid #eee",
};

const actionBtnStyle = {
  background: "#f0f0f0",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
  padding: "4px 8px",
  margin: "0 4px",
  transition: "background-color 0.2s ease",
};

actionBtnStyle[":hover"] = {
  backgroundColor: "#ddd",
};

export default TransactionList;
