import React from "react";
import { useTranslation } from "react-i18next";
import {  FaApple } from "react-icons/fa";
import "../styles/Login.css";

function Login() {
  const { t } = useTranslation();

  return (
    <div className="auth-container">
      {/* Left image section */}
      <div className="auth-image">
      <div className="image-overlay">
      <span className="quotnum-logo">Quotnum</span>
    </div>
        <img
          src={require("../assets/loginn.jpg")}
          alt="Laptop with charts"
        />
      </div>

      {/* Right form section */}
      <div className="auth-form">
      <a href="/" className="back-link">
      {t('Back home')} <span class="solar--arrow-right-bold"></span>
      </a>
        {/* Heading */}
        <h2>{t("Login to your account")}</h2>

        {/* Signup prompt */}
        <p className="signup-text">
          {t("Don’t have an account?")}{" "}
          <a href="/signup">{t("Sign up")}</a>
        </p>

        {/* Login form */}
        <form>
          <input type="email" placeholder={t("Email Address")} />
          <input type="password" placeholder={t("Password")} />
          <button type="submit">{t("Login")}</button>
        </form>

        {/* "Or continue with" text */}
        <div className="or-continue-with">
          <span>{t("Or continue with")}</span>
        </div>

        {/* Social login buttons */}
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
  );
}

export default Login;
