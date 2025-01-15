import React from 'react';
import '../styles/YourComponent.css'; // Import your CSS file
import heroImage from '../assets/hero-image.png';

const YourComponent = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1>
          Make it <span className="highlight">easy</span> for you <br/> and your clients.
        </h1>
        <p class="lower">Avoid traditional invoicing and switch to a smarter, <br/> faster solution.</p>

      </div>
      <div className="image-placeholder">
      <img src={heroImage} alt="Description" />
      </div>
    </div>
  );
};

export default YourComponent;
