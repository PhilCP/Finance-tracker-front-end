import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to other pages
import '../styles/AppTour.css';

const AppTour = () => {
  return (
    <section className="app-tour">
      <h1>Take a Tour of Our App</h1>
      <p>Here's how our website can help you automate your invoicing process:</p>
      <div className="tour-steps">
        <div className="step">
          <h3>Step 1: Create an Account</h3>
          <p>Sign up and create an account to start using our invoicing system.</p>
        </div>
        <div className="step">
          <h3>Step 2: Add Your Clients</h3>
          <p>Easily add your clients' information to manage them in one place.</p>
        </div>
        <div className="step">
          <h3>Step 3: Generate Invoices</h3>
          <p>Create professional invoices with just a few clicks. Customize them to suit your needs.</p>
        </div>
        <div className="step">
          <h3>Step 4: Automate Payments</h3>
          <p>Set up automated reminders and payment tracking for your invoices.</p>
        </div>
      </div>
      <div className="back-to-home">
        {/* Link to the anchor at the top of the page */}
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default AppTour;
