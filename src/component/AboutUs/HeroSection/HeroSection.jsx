import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="heroSection">
      <h2 className="title">About Us</h2>
      <div className="hero-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/95c94bb248db5d883dfcb463b9eb23515ae644b2b5f30bf617bb7fb48e7543ad?apiKey=904907665fd04df7b56e80ff4b56e284&"
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