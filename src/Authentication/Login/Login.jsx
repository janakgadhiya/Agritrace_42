import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // <-- Import useNavigate
import "./Login.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // <-- Initialize navigate

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // Simulate login success (you can replace this with your actual login logic)
    if (formData.email && formData.password) {
      // Navigate to home page after successful login
      navigate("/home"); 
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="company-side">
          <img src="./logo.png" alt="Company Logo" />
          <h1>AgriTrace</h1>
        </div>

        <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Sign in to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group password-group">
              <label>Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="separator">OR</div>

          <button className="google-btn">
            <FaGoogle /> Sign in with Google
          </button>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
