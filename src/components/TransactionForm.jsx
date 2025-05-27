import { useState } from "react";

// Income and spending categories
const incomeCategories = [
  "Salary",
  "Bonus",
  "Freelance",
  "Investment",
  "Gift",
  "Other",
];

const spendingCategories = [
  "Food & Groceries",
  "Rent & Utilities",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Health",
  "Subscriptions",
  "Travel",
  "Education",
  "Other",
];

function TransactionForm({ onAdd }) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || !category || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      category,
      description,
      date,
    };

    onAdd(newTransaction);

    setAmount("");
    setCategory("");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  const categories = type === "income" ? incomeCategories : spendingCategories;

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Add New Transaction</h3>

      <div style={fieldStyle}>
        <label>Type:</label>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setCategory("");
          }}
          style={inputStyle}
        >
          <option value="income">Income</option>
          <option value="spending">Spending</option>
        </select>
      </div>

      <div style={fieldStyle}>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div style={fieldStyle}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={inputStyle}
        />
      </div>

      <button type="submit" style={buttonStyle}>
        Add Transaction
      </button>
    </form>
  );
}

const formStyle = {
  marginBottom: "2rem",
};

const fieldStyle = {
  marginBottom: "1rem",
};

const inputStyle = {
  padding: "0.5rem",
  width: "100%",
  fontSize: "1rem",
  marginTop: "0.25rem",
};

const buttonStyle = {
  padding: "0.6rem 1.2rem",
  fontSize: "1rem",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default TransactionForm;
