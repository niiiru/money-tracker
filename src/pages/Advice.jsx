import { useState } from "react";

const adviceData = {
  Budgeting: {
    tips: [
      "Track every expense — Know where your money is going.",
      "Follow the 50/30/20 rule — 50% needs, 30% wants, 20% savings.",
      "Set monthly spending limits — And stick to them.",
    ],
    resources: [
      {
        label: "Budgeting Basics (CFPB)",
        url: "https://www.consumerfinance.gov/about-us/blog/budgeting-how-to-create-a-budget-and-stick-with-it/",
      },
      {
        label: "50/30/20 Budget Calculator – NerdWallet",
        url: "https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator",
      },
      {
        label: "Free Budget Templates – Vertex42",
        url: "https://www.vertex42.com/ExcelTemplates/budgets.html",
      },
    ],
  },

  Saving: {
    tips: [
      "Pay yourself first — Treat savings like a bill and automate it.",
      "Build an emergency fund — 3–6 months of living expenses.",
      "Save for specific goals — Travel, a car, home, etc.",
    ],
    resources: [
      {
        label: "Savings Guide – Investopedia",
        url: "https://www.investopedia.com/savings-4689725",
      },
      {
        label: "High-Yield Savings Accounts – NerdWallet",
        url: "https://www.nerdwallet.com/best/banking/high-yield-online-savings-accounts",
      },
      {
        label: "How to Start Saving – Clever Girl Finance",
        url: "https://www.clevergirlfinance.com/blog/how-to-start-saving-money/",
      },
    ],
  },

  Spending: {
    tips: [
      "Differentiate needs vs. wants — Don’t confuse the two.",
      "Avoid impulse purchases — Wait 24 hours before buying non-essentials.",
      "Use cash or debit — Reduce the risk of overspending with credit.",
    ],
    resources: [
      {
        label: "Stop Overspending – Clever Girl Finance",
        url: "https://www.clevergirlfinance.com/category/lifestyle-money-management/stop-overspending/",
      },
      {
        label: "The Psychology of Emotional Spending – Psychology Today",
        url: "https://www.psychologytoday.com/us/blog/mental-wealth/202305/the-psychology-of-emotional-spending",
      },
      {
        label: "Mindful Spending Tips – Money Under 30",
        url: "https://www.moneyunder30.com/budgeting-in-your-20s/",
      },
    ],
  },

  Investing: {
    tips: [
      "Start investing early — Time in the market beats timing the market.",
      "Diversify your portfolio — Don’t put all your eggs in one basket.",
      "Understand what you invest in — Don’t follow hype blindly.",
    ],
    resources: [
      {
        label: "Investing 101 – Morningstar",
        url: "https://www.morningstar.com/lp/investing-101",
      },
      {
        label: "Compound Interest Explained – Khan Academy",
        url: "https://www.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial/compound-interest-tutorial/v/introduction-to-compound-interest",
      },
      {
        label: "Beginner’s Guide to Investing – NerdWallet",
        url: "https://www.nerdwallet.com/article/investing/how-to-invest-money",
      },
    ],
  },
};

const categories = Object.keys(adviceData);

function Advice() {
  const [selectedCategory, setSelectedCategory] = useState("Budgeting");

  const { tips, resources } = adviceData[selectedCategory];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}> Financial Literacy Advice</h2>
      <h3>
        This section will provide you usefull resources which will help you to
        take control over your finances
      </h3>

      <div style={tabsStyle}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...tabButtonStyle,
              backgroundColor:
                selectedCategory === category ? "#007bff" : "#eee",
              color: selectedCategory === category ? "#fff" : "#333",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <ul style={listStyle}>
        {tips.map((tip, index) => (
          <li key={index} style={tipStyle}>
            {tip}
          </li>
        ))}
      </ul>

      <h4 style={{ marginTop: "2rem" }}> Recommended Resources</h4>
      <ul style={listStyle}>
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.url} target="_blank" rel="noopener noreferrer">
              {res.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle = {
  maxWidth: "700px",
  margin: "2rem auto",
  padding: "2rem",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  fontSize: "2rem",
  textAlign: "center",
  marginBottom: "1.5rem",
};

const tabsStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const tabButtonStyle = {
  padding: "0.6rem 1.2rem",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s",
};

const listStyle = {
  paddingLeft: "1.5rem",
  fontSize: "1.1rem",
  lineHeight: "1.6",
};

const tipStyle = {
  marginBottom: "0.8rem",
};

export default Advice;
