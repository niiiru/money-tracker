import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import SpendingChart from "../components/SpendingChart";

function Tracker() {
  const [transactions, setTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (token) {
      fetch("http://localhost:8000/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setTransactions(data))
        .catch((err) => {
          console.error("Failed to fetch transactions:", err);
          setTransactions([]);
        });
    } else {
      // Not logged in → show empty tracker (in-memory only)
      setTransactions([]);
    }
  }, []);

  const handleAdd = (newTx) => {
    setTransactions([newTx, ...transactions]);

    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      fetch("http://localhost:8000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newTx),
      }).catch((err) => console.error("Failed to save:", err));
    }
  };

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}> Money Tracker</h2>
      {!isLoggedIn && (
        <p style={{ textAlign: "center", fontStyle: "italic", color: "gray" }}>
          You’re using guest mode. Your data will not be saved after refresh.
        </p>
      )}
      <Summary transactions={transactions} />
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} />
      <SpendingChart transactions={transactions} />
    </div>
  );
}

const pageStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "2rem",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "2.5rem",
};

export default Tracker;
