import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';
import { FaAngleDown } from 'react-icons/fa';
import Flag from 'react-world-flags';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isHidden ? 'header-hidden' : ''}`}>
      <div className="logo">
        <Link to="/">Quotnum</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/FeaturesSection">{t('FEATURES')}</Link></li>
          <li><Link to="/Pricing">{t('PRICING')}</Link></li>
          <li><Link to="/ContactForm">{t('CONTACT_US')}</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="lang-switch" onClick={toggleDropdown}>
          <Flag code={i18n.language === 'en' ? 'GB' : i18n.language === 'fr' ? 'FR' : 'ES'} />
          <FaAngleDown />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => changeLanguage('en')}>
                <Flag code="GB" /> EN
              </button>
              <button onClick={() => changeLanguage('fr')}>
                <Flag code="FR" /> FR
              </button>
              <button onClick={() => changeLanguage('es')}>
                <Flag code="ES" /> ES
              </button>
            </div>
          )}
        </div>
        <Link to="/Login">
          <button className="login-btn">{t('LOGIN')}</button>
        </Link>
        <Link to="/SignUp">
          <button className="signup-btn">{t('SIGN_UP')}</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
