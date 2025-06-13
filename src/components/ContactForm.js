import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const handleInput = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.placeholder = e.target.dataset.placeholder;
    }
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Does Quotnum support different currencies?",
      content:
        "Quotnum is designed to support multiple currencies, allowing you to manage invoices and payments for clients across different countries seamlessly.",
    },
    {
      title: "Can I view a summary of my invoices and payments?",
      content: "Yes, you can view a detailed summary of all your invoices and payments.",
    },
    {
      title: "Can I customize the look of my invoices?",
      content: "Yes, Quotnum allows customization of invoice templates to match your brand.",
    },
    {
      title: "Is my data safe in Quotnum?",
      content: "Absolutely! We use industry-standard encryption to protect your data.",
    },
    {
      title: "Does Quotnum support different currencies?",
      content:
        "Quotnum is designed to support multiple currencies, allowing you to manage invoices and payments for clients across different countries seamlessly.",
    },
    {
      title: "Can I view a summary of my invoices and payments?",
      content: "Yes, you can view a detailed summary of all your invoices and payments.",
    },
    {
      title: "Can I customize the look of my invoices?",
      content: "Yes, Quotnum allows customization of invoice templates to match your brand.",
    },
    {
      title: "Is my data safe in Quotnum?",
      content: "Absolutely! We use industry-standard encryption to protect your data.",
    },
  ];

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        {/* Form Section */}
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
            <button type="submit" className="send-btn">
              Send message
            </button>
          </form>
          <p className="terms">
            By submitting your request, you accept the{" "}
            <a href="#terms">Terms & Conditions</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="accordion-section">
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div
                className={`accordion-item ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <div className="accordion-question" onClick={() => toggleAccordion(index)}>
                  {item.title}
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </div>
                <div className="accordion-answer" style={{ maxHeight: activeIndex === index ? "120px" : "0" }}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
