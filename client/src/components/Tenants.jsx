import React, { Component } from 'react';
import './../css/HomePage.css'; // Ensure this file contains your styles
import './../css/tenants.css'; // Ensure this file contains your styles
import Footer from './Footer'; // Assuming you have a footer component to import

export default class Tenants extends Component {
  render() {
    return (
      <div className="tenant-page">
        <h1>Tenant Page</h1>
        <div className="rental-info">
          <h2>Manage Your Rental</h2>
          <p>Here's a quick overview of your rental details:</p>
          
          {/* Placeholder for rental information */}
          <div className="rental-details">
            <p><strong>Amount Due:</strong> $500</p>
            <p><strong>Due Date:</strong> 15th February 2025</p>
            <button className="pay-button">Pay Now</button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
