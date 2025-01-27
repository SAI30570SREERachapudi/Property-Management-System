import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home1.css';

export class Home1 extends Component {

  render() {
    return (
      <div>
        <nav className="NavBar">
          <ul className="NavList">
            <img src='./../../public/images/property_logo.jpg' width={"20vh"} alt="logo" />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tenants">Tenants</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home1;
