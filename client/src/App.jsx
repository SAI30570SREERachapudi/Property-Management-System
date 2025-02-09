import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home1";
import Tenants from "./components/Tenants";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import Contact from "./components/Contact";
import AboutUs from "./../src/components/AboutUs";
function App() {
  return (
    <Router>
      {" "}
      <Home1 />{" "}
      <Routes>
        <Route path="/" element={<HomePage/> } />
        <Route path="/Tenants" element={<Tenants />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route
          path="/contact"
          element={<h1 style={{ color: "white" }}>Contact Page</h1>}
        /> */}
        <Route
          path="AboutUs"
          element={<AboutUs/>}
        />
        <Route
          path="/login"
          element={<LoginForm/>}
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
