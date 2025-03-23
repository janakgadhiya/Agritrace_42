import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="fwrapper">
      <div className="paddings innerWidth flexCenter fcontainer">
        
        {/* Left Section */}
        <div className="flexColStart fleft">
          <img src="/logo.png" alt="Logo" width={110} />
          <p>
            Our vision is to help people find the best place <br/>to live with ease and confidence.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flexColStart fright">
          <h3 className="ptext">Quick Links</h3>
          <div className="fmenu">
            <a href="#">Home</a>
            <a href="#">Field Register</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flexColStart fcontact">
          <h3>Contact Us</h3>
          <p>Gujarat - 360001</p>
          <p>Email: contact@Agritrace_42.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="flexColStart fsubscribe">
          <h3 className="ptext">Subscribe</h3>
          <p>Get updates on the latest fields.</p>
          <div className="subscribe-bar">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
      
      {/* Copyright Section */}
      <div className="copy">
        <span>© {new Date().getFullYear()} Agritrace. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
