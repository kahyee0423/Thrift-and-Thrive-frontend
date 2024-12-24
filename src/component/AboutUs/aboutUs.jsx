import React from 'react';
import './aboutUs.css';
import HeroSection from './HeroSection/HeroSection.jsx';  
import StorySection from './StorySection/StorySection.jsx';  
import Features from './Features/features.jsx'; 
import Footer from '../Footer/footer.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

const AboutUs = () => { 
  return (
    <main className="aboutUs">
      <NavigationBar /> 
      <HeroSection />
      <StorySection />
      <Features />
      <Footer />
    </main>
  );
}

export default AboutUs;
