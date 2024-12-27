import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="heroSection">
      <h2 className="title">About Us</h2>
      <div className="hero-content">
        <img
          src="./asset/woman2.png"
          alt="Sustainable fashion representation"
          className="heroImage"
          loading="lazy"
        />
        <div className="hero-textContent">
          <h3 className="subtitle">
            At Thrift & Thrive, we believe in a sustainable fashion future.
          </h3>
          <p className="description">
            Thrifting isn't just about scoring great deals on your favorite styles—it's 
            a movement toward intentional shopping and embracing sustainability. Every 
            pre-loved piece tells a story, and together, the clothes we choose can 
            inspire positive change for the planet and our communities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;