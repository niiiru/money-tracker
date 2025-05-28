import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://money-tracker-4q08.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username,
            password,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.access_token);
      navigate("/tracker");
    } catch (err) {
      console.error(err);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Login to Your Account</h2>

      <form onSubmit={handleLogin} style={formStyle}>
        <div style={fieldStyle}>
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>

      {message && <p style={{ marginTop: "1rem", color: "red" }}>{message}</p>}
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: "400px",
  margin: "2rem auto",
  padding: "2rem",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "1.8rem",
  marginBottom: "1.5rem",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const fieldStyle = {
  marginBottom: "1rem",
};

const inputStyle = {
  padding: "0.6rem",
  fontSize: "1rem",
  width: "100%",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginTop: "0.3rem",
};

const buttonStyle = {
  padding: "0.7rem",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Login;
