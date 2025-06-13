import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import '../styles/CTASection.css';

const CTASection = () => {
  const { t } = useTranslation();  // Using the translation hook

  return (
    <section className="cta">
      <div className="cta-text">
        <h2>
          {t('Start sending')} <br />
          <span className="highlight">{t('Invoices')} </span>
          <span>{t('today')}</span>
        </h2>

        <p>{t('Find out how Quotnum helps you develop and manage your business.')}</p>
      </div>
      <div className="cta-btn-container">
        <Link to="/SignUp">
          <button className="cta-btn">{t('Get Started')}</button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
