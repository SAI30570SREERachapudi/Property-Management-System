import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home1";
import Tenants from "./components/Tenants";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      {" "}
      <Home1 />{" "}
      <Routes>
        <Route
          path="/"
          element={<HomePage/> }
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
