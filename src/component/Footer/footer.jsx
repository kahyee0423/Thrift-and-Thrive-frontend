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
          <div className="socialIcons">
            <div>
              <a href="https://www.facebook.com/profile.php?id=61572482420735"><img src="./asset/fb.png" alt="Social media icons" /></a>
            </div>
            <div>
              <a href="https://www.instagram.com/thrif.thrive888/"><img src="./asset/ig.png" alt="Social media icons" /></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/thrift-and-thrive/about/?viewAsMember=true"><img src="./asset/linkedin.png" alt="Social media icons" /></a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;