import "../css/LoginForm.css";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing the eye icons
import Footer from "./Footer";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Logged in successfully!");
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-field">
//           <label id="password">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-field password-field">
//           <label id="password">Password</label>
//           <span className="eye-icon" onClick={togglePasswordVisibility}>
//             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//           </span>
//           <input
//             type={passwordVisible ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {/* Eye icon for showing and hiding the password */}
//         </div>
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//       <p className="signup-link">
//         Don't have an account? <a href="/signup">Sign up</a>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;

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
        <h2>Login</h2>
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
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
