import React from 'react'
import './contact.css'
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/footer'

const contact = () => {
  return (
    <>
    <NavigationBar />
    <main className="contactSection">
      <section className="contactContainer">
        <h1 className="heading">Contact Us</h1>
        <div className="contactInfo">
          We'd love to hear from you! Write to us and we will get back to
          you within 2-3 working days.
          <br />
          Contact Number:{" "}
          <span>+604-7171234</span>
          <br />
          General Enquiries:{" "}
          <a
            href="mailto:thriftthrive.my@gmail.com"
            className="contactLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to thriftthrive.my@gmail.com"
          >
            thriftthrive.my@gmail.com
          </a>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default contact;