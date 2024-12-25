import React from 'react';
import './PrivacyPolicy.css'
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import { contactInfo, PRIVACYPOLICY } from '../../utils/data';

const PrivacyPolicy = () => {
  return (
    <>
    <NavigationBar />
    <main className= "policyContainer" role="main">
      <div className="policy-title-container">
         <h1 className="policy-pageTitle">Privacy Policy</h1>
      </div>
      <p className="policy-effectiveDate" aria-label={`Effective Date: ${contactInfo.effectiveDate}`}>
        Effective Date: {contactInfo.effectiveDate}
        <p>At Thrift and Thrive, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services. By using our website, you agree to the practices described in this policy.
        </p>
      </p>
      
      {PRIVACYPOLICY.map(section => (
        <section 
        key={section.id} 
        className="policy-section"
        aria-labelledby={section.id}
      >
        <h2 id={section.id} className="policy-sectionTitle">
          {section.title}
        </h2>
        {section.content.map((subsection, index) => (
          <div key={`${section.id}-${index}`}>
            <h3 className="policy-subtitle">{subsection.subtitle}</h3>
            <ul className="policy-list">
              {subsection.items.map((item, itemIndex) => (
                <li 
                  key={`${section.id}-${index}-${itemIndex}`}
                  className="policy-listItem"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="policy-description">{subsection.description}</h3>
          </div>
        ))}
      </section>
      
      ))}

      <section className="policy-section" aria-labelledby="contact">
        <h2 id="contact" className="policy-sectionTitle">
          9. Contact Us
        </h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <ul className="policy-list">
          <li className="policy-listItem">
            Email: 
            <a 
              href={`mailto:${contactInfo.email}`}
              className="policy-contactLink"
              aria-label="Send email to Thrift and Thrive"
            >
              {contactInfo.email}
            </a>
          </li>
          <li className="policy-listItem">
            Phone: 
            <a 
              href={`tel:${contactInfo.phone}`}
              className="policy-contactLink"
              aria-label="Call Thrift and Thrive"
            >
              {contactInfo.phone}
            </a>
          </li>
        </ul>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default PrivacyPolicy;