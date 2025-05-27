import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
  "#8884d8",
  "#8dd1e1",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#d0ed57",
  "#a4de6c",
  "#ffbb28",
  "#ff6384",
  "#36a2eb",
];

function SpendingChart({ transactions }) {
  // Filter only spending
  const spending = transactions.filter((tx) => tx.type === "spending");

  // Aggregate by category
  const data = spending.reduce((acc, tx) => {
    const found = acc.find((item) => item.name === tx.category);
    if (found) {
      found.value += tx.amount;
    } else {
      acc.push({ name: tx.category, value: tx.amount });
    }
    return acc;
  }, []);

  if (data.length === 0) {
    return <p>No spendings to display.</p>;
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Spending Breakdown by Category</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default SpendingChart;
