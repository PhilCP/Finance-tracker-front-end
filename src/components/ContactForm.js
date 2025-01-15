import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const handleInput = (e) => {
    e.target.placeholder = '';
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.placeholder = e.target.dataset.placeholder;
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="form-section">
          <h3 className="contact-heading">We are ready to listen</h3>
          <h2>Let’s talk</h2>
          <form className="inline-form">
            <div className="form-group-row">
              <div className="form-group-inline">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  data-placeholder="Full Name"
                  onInput={handleInput}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group-inline">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  data-placeholder="Email Address"
                  onInput={handleInput}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="form-group-inline">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number (Optional)"
                data-placeholder="Phone Number (Optional)"
                onInput={handleInput}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group-inline">
              <input
                id="enquiry"
                name="enquiry"
                
                placeholder="Your Enquiry"
                data-placeholder="Your Enquiry"
                onInput={handleInput}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit" className="send-btn">Send message</button>
          </form>
          <p className="terms">
            By submitting your request, you accept the <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
        <div className="dropdown-section">
          <select>
            <option>Lorem Ipsum</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select>
            <option>Lorem Ipsum</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select>
            <option>Lorem Ipsum</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select>
            <option>Lorem Ipsum</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select>
            <option>Lorem Ipsum</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select>
            <option>Lorem Ipsum</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
