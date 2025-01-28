import React from 'react';
import { Link } from 'react-router-dom';
import './Home1.css';

const Home1 = () => {
  return (
    <div>
      <nav className="BlackBackground">
        <ul className="NavList">
          <img 
            src="./../../public/images/home.png" 
            width="20vh" 
            alt="logo" 
          />
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
};

export default Home1;
