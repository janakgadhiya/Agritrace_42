import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <h2>What We Offer</h2>
      <div className="features-grid">
        <div className="feature-card">
          <img src="./field.jpg" alt="Field Registration" />
          <h3>Field Registration</h3>
          <p>Register and manage your farm data digitally and securely.</p>
        </div>
        <div className="feature-card">
          <img src="./smarttool.jpg" alt="Smart Tools" />
          <h3>Smart Farming Tools</h3>
          <p>Innovative tools and analytics to help you maximize yield.</p>
        </div>
        <div className="feature-card">
          <img src="./market.jpg" alt="Market Access" />
          <h3>Market Access</h3>
          <p>Connect with buyers, traders, and agriculture markets easily.</p>
        </div>
        <div className="feature-card">
          <img src="./study.webp" alt="Knowledge Hub" />
          <h3>Knowledge Hub</h3>
          <p>Stay updated with expert articles and best farming practices.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
