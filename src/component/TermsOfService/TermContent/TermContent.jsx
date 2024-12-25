import React from 'react'
import './TermContent.css'
import { termsContent } from '../../../utils/data';

const TermContent = () => {
    return (
        <main className="termsContent" role="main">
          <h1 className="pageTitle">Terms of Service</h1>
          <div className="terms-title">
            <div className="lastUpdated" aria-label="Last updated date">
            Last Updated: {termsContent.lastUpdated}
          </div>
          <div className="introduction">
            {termsContent.introduction}
          </div>
          </div>
            
          <div className="terms-content">
            {termsContent.sections.map((section, index) => (
            <section 
              key={index} 
              className="section"
              aria-labelledby={`section-title-${index}`}
            >
              <h2 
                id={`section-title-${index}`} 
                className="section-Title"
              >
                {section.title}
              </h2>
              <p className="sectionContent">
                {section.content}
              </p>
            </section>
          ))}
          <section 
            className="contactSection}"
            aria-labelledby="contact-section"
          >
            <h2 id="contact-section">{termsContent.contactInfo.title}</h2>
            <p>{termsContent.contactInfo.content}</p>
            <ul>
              <li>
                Email: <a href={`mailto:${termsContent.contactInfo.email}`}>
                  {termsContent.contactInfo.email}
                </a>
              </li>
              <li>
                Phone: <span>{termsContent.contactInfo.phone}</span>
              </li>
            </ul>
          </section>
          </div>
          
        </main>
      );
}

export default TermContent;