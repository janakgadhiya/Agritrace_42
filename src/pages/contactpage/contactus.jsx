import React from "react";
import "./contactus.css";
import { motion } from "framer-motion";
import Footer from "../Home/footer/footer";
import Header from "../Home/header/header";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Header/>

      <motion.section 
        className="contact-form-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Get in Touch with Us</h2>
        <p>We'd love to hear from you. Fill the form below and we’ll get back shortly!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

    <Footer/>
    </div>
  );
};

export default ContactUs;
