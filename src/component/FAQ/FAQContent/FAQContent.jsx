import React, { useState } from 'react';
import { faqData } from '../../../utils/data';
import './FAQContent.css';

export const FAQContent = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      className="faqSection"
      aria-labelledby="faq-section-title"
    >
      <div className="faqContainer">
        <h2 id="faq-section-title" className="visuallyHidden">
          Frequently Asked Questions
        </h2>
        <div className="faqList" role="list">
          {faqData.map((faq) => (
            <article 
              key={faq.id}
              className="faqItem"
            >
              <button
                className="questionButton"
                onClick={() => handleToggle(faq.id)}
                aria-expanded={expandedId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="question">{faq.question}</h3>
                <span className="icon" aria-hidden="true">
                  {expandedId === faq.id ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`answer ${expandedId === faq.id ? 'expanded' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
                hidden={expandedId !== faq.id}
              >
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};