import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <a href="/tracker">Tracker</a>
        </li>
        <li>
          <a href="/advice">Advice</a>
        </li>

        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#f4f4f4",
  padding: "1rem",
};

const ulStyle = {
  display: "flex",
  listStyle: "none",
  gap: "1rem",
  margin: 0,
  padding: 0,
};

// const logoutBtnStyle = {
//   backgroundColor: "#ff4d4d",
//   color: "white",
//   border: "none",
//   padding: "0.5rem 1rem",
//   cursor: "pointer",
//   borderRadius: "4px",
// };

export default Navbar;
