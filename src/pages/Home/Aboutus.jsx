import React from "react";
import "./Aboutus.css";
import Header from "./header/header";
import Footer from "./footer/footer";

const AboutUs = () => {
  return (
    <>
      <Header/>
      <div className="about-us-container">
        <header className="about-header">
          <h1>About AgriTrace</h1>
          <p>Empowering farmers & customers with transparency and technology</p>
        </header>

        <section className="about-section mission">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At AgriTrace, we aim to revolutionize agriculture by enabling farmers and customers to track and trust every product. 
              We bridge the gap between traditional farming and smart technology to ensure safe, traceable, and sustainable food production.
            </p>
          </div>
          <img src="./mission.jpg" alt="Mission" />
        </section>

        <section className="about-section vision">
          <img src="./vision.jpg" alt="Vision" />
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>
              We envision a world where every farm and field uses data-driven solutions to maximize crop quality, reduce waste, and support eco-friendly practices.
            </p>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="./person.jpg" alt="Founder" />
              <h3>Krish Patel</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-card">
              <img src="./person.jpg" alt="CTO" />
              <h3>Dhruvik Patel</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-card">
              <img src="./person.jpg" alt="Agronomist" />
              <h3>Janak Patel</h3>
              <p>Lead Agronomist</p>
            </div>
          </div>
        </section>

        <section className="why-choose-container">
          <div className="why-choose-card">
            <h2>Why Choose AgriTrace?</h2>
            <ul>
              <li>✅ Transparent supply chain</li>
              <li>✅ Data-backed farming solutions</li>
              <li>✅ Trusted by farmers and consumers</li>
              <li>✅ Real-time crop monitoring</li>
              <li>✅ Eco-friendly and sustainable practices</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
