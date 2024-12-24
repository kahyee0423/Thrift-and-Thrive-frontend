import React from 'react'
import './features.css'
import { feature } from '../../../utils/data'; 

const features = () => {
    
      return (
        <section className="features">
          <h2 className="feature-title">WHY CHOOSE THRIFT & THRIVE?</h2>
          <p className="feature-subtitle">
            We make it easy to give your clothing a second life while embracing sustainability
          </p>
          <div className="featureGrid">
            {feature.map((feature, index) => (
              <div key={index} className="featureCard">
                <h3 className="featureTitle">{feature.title}</h3>
                <p className="featureDescription">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
  )
}

export default features;