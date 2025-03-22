import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; 
import "./Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userType, setUserType] = useState("Customer");
  const navigate = useNavigate(); // Initialize navigate

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(`${userType} Sign-Up Data:`, formData);

    // Redirect to home after successful signup
    navigate("/home");
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="company-side">
          <img src="./logo.png" alt="Company Logo" />
          <h1>AgriTrace</h1>
        </div>

        <div className="signup-card">
          <div className="toggle-buttons">
            <button
              className={userType === "Customer" ? "active" : ""}
              onClick={() => setUserType("Customer")}
            >
              Customer
            </button>
            <button
              className={userType === "Farmer" ? "active" : ""}
              onClick={() => setUserType("Farmer")}
            >
              Farmer
            </button>
          </div>

          <h2>Create a {userType} Account</h2>
          <p>Join us and explore amazing opportunities</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

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
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="input-group password-group">
              <label>Confirm Password</label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span onClick={toggleConfirmPassword}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="signup-btn">
              Sign Up as {userType}
            </button>
          </form>

          <div className="separator">OR</div>

          <button className="google-btn">
            <FaGoogle /> Sign up with Google
          </button>

          <p className="signup-link">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
