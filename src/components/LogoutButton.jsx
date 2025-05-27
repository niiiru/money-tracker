import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const buttonStyle = {
    backgroundColor: "#e63946",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const hoverStyle = {
    backgroundColor: "#d62839",
  };

  // Combine styles on hover (optional but basic version here)
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onClick={handleLogout}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
