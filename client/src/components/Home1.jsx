import React from "react";
import { Link } from "react-router-dom";
import "../css/Home1.css";

const Home1 = () => {
  return (
    <div>
      <nav className="BlackBackground">
        <ul className="NavList">
        <li id="image-logo">  <img src="./../../public/images/1.png" width="230vh"  alt="logo" /></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Rentals">Rentals</Link>
          </li>
          <li>
            <Link to="/PropertyManager">Property Manager</Link>
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
