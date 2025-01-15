import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';
import { FaAngleDown } from 'react-icons/fa';
import Flag from 'react-world-flags';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      setCurrentLanguage(lang);
    });
    setDropdownOpen(false);
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setHeaderVisible(false); // scrolling down
    } else {
      setHeaderVisible(true); // scrolling up
    }
    setLastScrollY(window.scrollY); // update last scroll position
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`header ${headerVisible ? '' : 'header-hidden'}`}>
      <div className="logo">
        <Link to="/">Quotnum</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/FeaturesSection">{t('FEATURES')}</Link></li>
          <li><a href="/Pricing">{t('PRICING')}</a></li>
          <li><a href="/ContactForm">{t('CONTACT US')}</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="lang-switch" onClick={toggleDropdown}>
          <Flag code={currentLanguage === 'en' ? 'GB' : currentLanguage === 'fr' ? 'FR' : 'ES'} />
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
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/SignUp">
          <button className="signup-btn">Sign up, it’s Free</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
