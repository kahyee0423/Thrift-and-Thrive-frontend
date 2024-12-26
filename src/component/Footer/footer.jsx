import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <nav className="footerNav">
        <div className="footerSection">
          <h2 className="sectionTitle">INFORMATION</h2>
          <ul>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h2 className="sectionTitle">ACCOUNT</h2>
          <ul>
            <li><a href="/account">My Account</a></li>
            <li><a href="/Cart">My Cart</a></li>
            <li><a href="/account">Order History</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h2 className="sectionTitle">HELP</h2>
          <ul>
            <li><a href="/FAQ">FAQs</a></li>
            <li><a href="/TermsOfService">Terms of Service</a></li>
            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="/ReturnPolicy">Return Policy</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h2 className="sectionTitle">STAY CONNECTED</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8c43c679d261668f836e58a1aeceb812564fd2872ac9e9834706d12483eada?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284"
            alt="Social media icons"
            className="socialIcons"
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;