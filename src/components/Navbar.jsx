import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/tracker">Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/advice">Advice</NavLink>
        </li>

        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
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
