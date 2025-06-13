import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/AdaptableSection.css';
import { FaHeadset, FaUserCog, FaLock } from 'react-icons/fa';

const AdaptableSection = () => {
  const { t } = useTranslation(); // Using the translation hook

  return (
    <section className="adaptable">
      <h2>{t('Built to adapt as you grow, built for speed')}</h2>
      <div className="adaptable-grid">
        <div className="adaptable-card">
          <FaHeadset className="icon" />
          <h3>{t('Quick Support')}</h3>
          <p>{t('Quotnumm support is equipped to meet your every inquiry.')}</p>
        </div>
        <div className="adaptable-card">
          <FaUserCog className="icon" />
          <h3>{t('Personalized Experience')}</h3>
          <p>{t('Curated with personalization prioritized.')}</p>
        </div>
        <div className="adaptable-card">
          <FaLock className="icon" />
          <h3>{t('Safe and Secure')}</h3>
          <p>{t('Quotnumm is hosted on secure servers.')}</p>
        </div>
      </div>
    </section>
  );
};

export default AdaptableSection;
