import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <form className="contactForm">
          <h2 className="contactForm-sectionTitle">Contact</h2>
          <div className="contactForm-formGroup">
            <label htmlFor="email" className="contactForm-visuallyHidden">Email</label>
            <input
              type="email"
              id="email"
              className="contactForm-emailInput"
              placeholder="Email"
              required
            />
          </div>
          <div className="contactForm-checkboxGroup">
            <input
              type="checkbox"
              id="newsletter"
              className="contactForm-checkbox"
            />
            <label htmlFor="newsletter" className="contactForm-checkboxLabel">
              Email me with news and offers
            </label>
          </div>
        </form>
      );
}

export default ContactForm