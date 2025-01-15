import React, { useState } from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = (value) => {
    setIsMonthly(value);
  };

  return (
    <div>
      <div className="pricing-container">
        <h1>
          Explore Our Plans <span className="second-line"> & Find Your <span className="highlight">Perfect Fit</span></span>
        </h1>
        <p>Big or small, there’s a feature-rich, affordable solution for you.</p>
      </div>

      <div className="pricing-toggle">
  <div className="pricing-toggle-container">
    <button
      className={`monthly ${isMonthly ? 'active' : ''}`}
      onClick={() => togglePricing(true)}
    >
      Monthly
    </button>
    <button
      className={`annually ${!isMonthly ? 'active' : ''}`}
      onClick={() => togglePricing(false)}
    >
      Annually
    </button>
  </div>
</div>


      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>Best for New & Budding Businesses</p>
          <div className="price-line"></div>
          <div className="price">
            ${isMonthly ? '29.99' : '299.99'}
            <div className="billed">Billed {isMonthly ? 'Monthly' : 'Annually'}</div>
          </div>
          
          <button className="get-started">Get Started</button>
          <div className="plan-includes">
            <p>Plan includes:</p>
            <ul className="features">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>

        <div className="pricing-card">
          <h3>Standard</h3>
          <p>Best for Small & Medium Businesses</p>
          <div className="price-line"></div>
          <div className="price">
            ${isMonthly ? '49.99' : '499.99'}
            <div className="billed">Billed {isMonthly ? 'Monthly' : 'Annually'}</div>
          </div>
          
          <button className="get-started">Get Started</button>
          <div className="plan-includes">
            <p>Plan includes:</p>
            <ul className="features">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>

        <div className="pricing-card">
          <h3>Advanced</h3>
          <p>Best for Large Businesses</p>
          <div className="price-line"></div>
          <div className="price">
            ${isMonthly ? '99.99' : '999.99'}
            <div className="billed">Billed {isMonthly ? 'Monthly' : 'Annually'}</div>
          </div>
         
          <button className="get-started">Get Started</button>
          <div className="plan-includes">
            <p>Plan includes:</p>
            <ul className="features">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="subscription-section">
        <p className="subscription-text">
          <span>Subscribe to get more information, latest news</span>
          <span className="second-line"> and other interesting offers about Quotnum</span>
        </p>
        <div className="subscribe-container">
          <div className="icon">
            <i className="fas fa-envelope"></i> {/* Font Awesome Icon */}
          </div>
          <input type="email" placeholder="your email" />
          <button>Subscribe</button>
        </div>
        <p className="terms">
          By submitting your request, you accept the <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
