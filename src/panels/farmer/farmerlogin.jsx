import React, { useState } from "react";
import "./farmer.css";
import { FaUserCircle } from "react-icons/fa";

const FarmerLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "farmer" && password === "farmer123") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="farmer-login-container">
      <form onSubmit={handleSubmit} className="farmer-login-form">
        <div className="avatar-icon">
          <FaUserCircle size={80} />
        </div>
        <h2>Farmer Login</h2>
        {error && <p className="error-msg">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FarmerLogin;
