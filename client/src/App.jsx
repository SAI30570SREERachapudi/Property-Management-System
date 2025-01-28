import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home1";
import Tenants from "./components/Tenants";

function App() {
  return (
    <Router>
      {" "}
      <Home1 />{" "}
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="HomePage1"
              style={{ display: "flex", padding: "20px" }}
            >
              <h5 style={{ textAlign: "left", color: "white" }}>
                Whether you're a property owner, a tenant, or looking for expert
                advice, we're here to help. Our team is dedicated experience for
                both property owners and residents.
              </h5>    <img
                src="./../public/images/gif1.gif"
                alt="Home Page GIF"
                style={{ width: "30%", height: "auto", marginBottom: "20px" }}
              />
            </div>
          }
        />
        <Route path="/Tenants" element={<Tenants />} />
        <Route
          path="/contact"
          element={<h1 style={{ color: "white" }}>Contact Page</h1>}
        />
        <Route
          path="/feedback"
          element={<h1 style={{ color: "white" }}>Feedback Page</h1>}
        />
        <Route
          path="/login"
          element={<h1 style={{ color: "white" }}>Login Page</h1>}
        />
        <Route
          path="/register"
          element={<h1 style={{ color: "white" }}>Register Page</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
