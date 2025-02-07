import React, { Component } from 'react'
import "../css/HomePage.css";
export class Footer extends Component {
  render() {
    return (
      <div id='footer_div'>


<footer class="footer">
        <div class="footer-container">
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Legal Disclaimer</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          <div class="footer-stats">
            <div class="stat">
              <h3>
                Properties Sold
                <p id="soldCount">19</p>
              </h3>
            </div>
            <div class="stat">
              <h3>
                Houses Rented
                <p id="rentedCount">2892</p>
              </h3>
            </div>
          </div>
          <div class="footer-info">
            <p>
              © 2025, <strong>PropertyPro</strong> All rights reserved.
            </p>
            <p>Developed and Managed in React, Spring Boot</p>
          </div>
        </div>
      </footer>
      </div>
    )
  }
}

export default Footer