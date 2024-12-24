import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage/homepage';
import AboutUs from './component/AboutUs/aboutUs'; 
import Men from './component/Men/men';
import Women from './component/Women/women';
import Kids from './component/Kids/kids';
import Accessories from './component/Accessories/accessories';
import Contact from './component/ContactUs/contact';
import FAQ from './component/FAQ/FAQ';
import TermsOfService from './component/TermsOfService/TermsOfService';
import PrivacyPolicy from './component/PrivacyPolicy/PrivacyPolicy';
import ReturnPolicy from './component/ReturnPolicy/ReturnPolicy';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/TermsOfService" element={<TermsOfService />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
    </Routes>
  );
};

export default App;