import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/YourComponent.css'; // Import your CSS file
import heroImage from '../assets/hero-image.png';

const YourComponent = () => {
  const { t } = useTranslation(); // Using the translation hook

  return (
    <div className="container">
      <div className="text-section">
        <h1>
          {t('Make it')} <span className="highlight">{t('easy')}</span> {t('for you')} <br/> {t('and your clients.') }
        </h1>
        <p className="lower">
          {t('Avoid traditional invoicing and switch to a smarter, faster solution designed to revolutionize your billing process.')}
          <br />
          <span>
            {t('This innovative approach not only saves you valuable time but also boosts accuracy, enhances operational efficiency, and simplifies every aspect of invoicing.')}
            <br />
            {t('By automating repetitive tasks and minimizing errors, you can maintain professionalism and ensure seamless transactions, all while freeing up your resources to focus on scaling your business and achieving your growth goals.')}
          </span>
        </p>
      </div>
      <div className="image-placeholder">
        <img src={heroImage} alt={t('Description')} />
      </div>
    </div>
  );
};

export default YourComponent;
