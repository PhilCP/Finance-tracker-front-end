import React from 'react';
import '../styles/AdaptableSection.css';
import { FaHeadset, FaUserCog, FaLock } from 'react-icons/fa';

const AdaptableSection = () => {
  return (
    <section className="adaptable">
      <h2>Built to adapt as you grow, built for speed</h2>
      <div className="adaptable-grid">
        <div className="adaptable-card">
          <FaHeadset className="icon" />
          <h3>Quick Support</h3>
          <p>Quotnumm support is equipped to meet your every inquiry.</p>
        </div>
        <div className="adaptable-card">
          <FaUserCog className="icon" />
          <h3>Personalized Experience</h3>
          <p>Curated with personalization prioritized.</p>
        </div>
        <div className="adaptable-card">
          <FaLock className="icon" />
          <h3>Safe and Secure</h3>
          <p>Quotnumm is hosted on secure servers.</p>
        </div>
      </div>
    </section>
  );
};

export default AdaptableSection;
