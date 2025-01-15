import React from "react";
import "../styles/FooterSection.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTimes } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Anything you need help with?</h3>
        <button className="help-center-button">Help Center</button>
      </div>
      <hr className="blurring-line" />
      <div className="footer-links">
        <div className="footer-column">
          <h4>General</h4>
          <ul>
            <li><a href="/">Quotnum Home</a></li>
            <li><a href="/about">About Quotnum</a></li>
            <li><a href="/FeaturesSection">Features</a></li>
            <li><a href="/Pricing">Pricing Plans</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Account</h4>
          <ul>
            <li><a href="/SignUp">Sign Up</a></li>
            <li><a href="/Login">Account Login</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/ContactForm">Contact Us</a></li>
          </ul>
          <hr className="small-line" />
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaTimes />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
  <p>© 2025 Quotnum, A Product Of <a href="https://terrvio.com/" target="_blank" rel="noopener noreferrer" className="terrvio-link">Terrvio</a> Technologies. All Rights Reserved</p>
</div>

    </footer>
  );
};

export default FooterSection;
