import React from 'react'; 
import { useTranslation } from 'react-i18next';
import {  FaApple } from 'react-icons/fa'; // Import icons
import '../styles/SignUp.css';

function SignUp() {
  const { t } = useTranslation();

  return (
    <div className="auth-container">
      <div className="auth-image">
      <div className="image-overlay">
      <span className="quotnum-logo">Quotnum</span>
    </div>
        <img src={require('../assets/loginn.jpg')} alt="Laptop with charts" />
      </div>
      <div className="auth-form">
        <a href="/" className="back-link">
          {t('Back to website')} <span class="solar--arrow-right-bold"></span>
        </a>
        <h1>{t('Create an account')}</h1>
        <p className="signup-text">{t('Already have an account?')} <a href="/login">{t('login')}</a></p>
        <form>
          <div className="name-fields">
            <input type="text" placeholder={t('firstname')} />
            <input type="text" placeholder={t('lastname')} />
          </div>
          <input type="email" placeholder={t('email')} />
          <input type="password" placeholder={t('password')} />
          <button type="submit">{t('Create account')}</button>
        </form>
        <div className="or-register-with">
          <span>{t('or register with')}</span>
        <div className="auth-icons">
      <button className="google-icon">
        <span className="flat-color-icons--google"></span> Google
      </button>
      <button className="apple-icon">
        <FaApple /> Apple
      </button>
    </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
