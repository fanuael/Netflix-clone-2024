import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'; // Ensure the correct path and case

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-logo">
          <img src="/path/to/logo.png" alt="Company Logo" className="footer-logo-img" />
        </div>
        <div className="footer-icons">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="footer-data">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relationships</li>
              <li>Legal Notice</li>
              <li>Help Center</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>Email: contact@company.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footer-input"
            />
            <button type="submit" className="footer-button">Subscribe</button>
          </form>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;