import "../css/Register.css";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing the eye icons
import Footer from "./Footer";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email" id="email">
              <h3>Email</h3>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone" id="email">
              <h3>Phone</h3>
            </label>
            <input
              id="email"
              type="phone"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="Country" id="email">
              <h3>Country</h3>
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your Country"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field password-field">
            <label htmlFor="password" id="password">
              <h3>Password</h3>
            </label>
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Already have an account? <a href="/login">Login Here</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default LoginForm;
