import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Advice from "./pages/Advice";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <div style={{ padding: "2rem" }}>
              <h1>Welcome to Money Tracker</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
