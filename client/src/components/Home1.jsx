import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home1.css';

export class Home1 extends Component {
  render() {
    return (
      <nav className="NavBar">
        <ul className="NavList">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Tenants">Tenants</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Home1;
