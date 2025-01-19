import React from 'react';
import './homepage.css';
import ReviewCard from '../ReviewCard/reviewCard.jsx';
import Footer from '../Footer/footer.jsx';
import { REVIEWS, SHOPBANNERDATA } from '../../utils/data.js';
import { FEATURES } from '../../utils/data'; 
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

const Homepage = () => {
  const navigate = useNavigate();

  const goToAbout =() =>{
    navigate('/AboutUs');
}

  return (
      <main className="homePage">
          <NavigationBar/>
          <section className="hero">
              <img src="./asset/homepage.jpeg" alt="Hero banner" className="HeroImage"/>
              <div className="mainContent">
                  <h2 className="mainTitle">
                      Great style with greater purpose,
                      <br/>
                      pre-loved fashion made just for you
                  </h2>
              </div>
          </section>

          <section className="about">
              <div className="aboutImageWrapper">
                  <img src="./asset/clothes-back.png" alt="" className="aboutImage"/>
                  <button className="aboutButton" onClick={goToAbout}>About Us</button>
              </div>
              <div className="aboutContent">
                  <img src="./asset/big.png" alt="" className="decorativeImage"/>
                  <h2 className="aboutTitle">Welcome to Thrift & Thrive!</h2>
                  <p className="aboutText">
                      We bring you high-quality, stylish pre-loved clothing that's ethically sourced and sustainably
                      curated.
                      At Thrift & Thrive, we're passionate about creating a win-win experience for our customers and the
                      planet.
                      By embracing second-hand fashion, you're contributing to a greener future while enjoying unique
                      styles at affordable prices.
                  </p>
              </div>
          </section>


          <section className="categories">
              <div className="categoryGrid">
                  <div className="categoryCard">
                      <img src="./asset/men.jpg" alt="Men's Fashion" className="categoryImage"
                           onClick={() => navigate('/men')}/>
                      <div className="categoryLabel">Men</div>
                  </div>
                  <div className="categoryCard">
                      <img src="./asset/fashion.png" alt="Women's Fashion" className="categoryImage"
                           onClick={() => navigate('/women')}/>
                      <div className="categoryLabel">Women</div>
                  </div>
                  <div className="categoryCard">
                      <img src="./asset/kids.jpg" alt="Kid's Fashion" className="categoryImage"
                           onClick={() => navigate('/kids')}/>
                      <div className="categoryLabel">Kids</div>
                  </div>
                  <div className="categoryCard">
                      <img src="./asset/hat.png" alt="Accessories' Fashion" className="categoryImage"
                           onClick={() => navigate('/accessories')}/>
                      <div className="categoryLabel">Accessories</div>
                  </div>
              </div>
          </section>

          <section className="whyShopBanner">
              <h2 className="home-sectionTitle">Why Shop with Us?</h2>
              <div className="bannerContent">
              {SHOPBANNERDATA.map((item, index) => (
                    <div key={index} className={`bannerItem ${item.background}`}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    ))}
              </div>
          </section>


          <section className="reviews">
              <h2 className="home-sectionTitle">What Our Customer Say</h2>
              <div className="reviewGrid">
                  {REVIEWS.map((review, index) => (
                      <ReviewCard key={index} {...review} />
                  ))}
              </div>
          </section>

          <div className="home-features">
              {FEATURES.map((feature, index) => (
                  <div key={index} className="home-feature">
                      <img
                          src={feature.image}
                          alt={feature.title}
                          className="home-featureIcon"
                      />
                      <span className="home-featureText">{feature.title}</span>
                  </div>
              ))}
          </div>

          <Footer/>
      </main>
  );
}

export default Homepage;
