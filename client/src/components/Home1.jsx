import React from "react";
import { Link } from "react-router-dom";
import "../css/Home1.css";

const Home1 = () => {
  return (
    <div>
      <nav className="BlackBackground">
        <ul className="NavList">
          <img src="./../../public/images/logo124.jpeg" width="200vh" alt="logo" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tenants">Mangers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/AboutUs">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home1;
