import React from 'react'
import './FAQ.css'
import Footer from '../Footer/footer'
import NavigationBar from '../NavigationBar/NavigationBar'
import { FAQContent } from './FAQContent/FAQContent'

const FAQ = () => {
  return (
    <div className="pageWrapper">
      <NavigationBar />
      <main id="main-content" className="mainContent">
        <header className="page-Header" role="banner">
          <h1>Frequently Asked Questions (FAQs)</h1>
        </header>
        <FAQContent />
      </main>
      <Footer />
    </div>
  )
}

export default FAQ;