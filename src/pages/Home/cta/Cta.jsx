import React from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <h2>Ready to transform your farm?</h2>
      <Link to="/">
        <button>Join Now</button>
      </Link>
    </section>
  );
};

export default CTA;
