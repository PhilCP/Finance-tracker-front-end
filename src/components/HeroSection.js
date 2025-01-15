import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next'; 
import '../styles/HeroSection.css';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  const { t } = useTranslation();  // Make sure to use the translation hook

  return (
    <section className="hero">
      <div className="hero-content">
      <h1>
          {t('Automate')} <br />
          <span>{t('your')} <span className="highlight">{t('invoice.')}</span></span>
        </h1>
        <p>
          {t('Simplify your invoicing process by switching')} 
          <span className="line-break">{t('to an easy-to-use system.')}</span>
        </p>
        <div className="hero-buttons">
          <Link to="/SignUp">
            <button className="get-started-btn">{t('Get started')}</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
