import React from 'react'; 
import '../styles/FeaturesSection.css';
import { FaFileInvoice, FaUsers, FaFilePdf } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const FeaturesSection = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <section className="features" id="features">
      <h2 className="main-heading">{t('Devote your efforts to growing your business')}</h2>
      <p className="sub-heading">{t('Let Quotnum handle your invoicing needs - secure, simple, and efficient for businesses of all kinds')}</p>
      
      <div className="features-grid">
        <div className="feature-card">
          <FaFileInvoice className="icon" />
          <h3>{t('Simplified Invoicing')}</h3>
          <p>{t('Create and send invoices in just a few clicks. Say goodbye to complex processes and hello to a seamless experience that saves you time and reduces errors.')}</p>
        </div>

        <div className="feature-card">
          <FaUsers className="icon" />
          <h3>{t('Customer Management')}</h3>
          <p>{t('Easily manage your customer database with an intuitive system designed to keep all your client details organized and accessible. Strengthen your relationships with better insights and communication.')}</p>
        </div>

        <div className="feature-card">
          <FaFilePdf className="icon" />
          <h3>{t('Automated PDF Generation')}</h3>
          <p>{t('Instantly generate professional PDFs and secure links for your invoices. Share them effortlessly, ensuring faster payments and a more streamlined workflow.')}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
