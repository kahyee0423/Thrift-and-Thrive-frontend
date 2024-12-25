import React from 'react';
import './homepage.css';
import Header from '../Header/header.jsx';
import ProductCard from '../ProductCard/productCard.jsx';
import ReviewCard from '../ReviewCard/reviewCard.jsx';
import Footer from '../Footer/footer.jsx';
import { PRODUCTS } from '../../utils/data.js';
import { REVIEWS } from '../../utils/data.js';
import { FEATURES } from '../../utils/data'; 
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const goToAbout =() =>{
    navigate('/AboutUs');
}

  return (
    <main className="homePage">
      <Header />
      
      <section className="hero">
        <img src="./asset/homepage.jpeg" alt="Hero banner" className="HeroImage"/>
        <div className="mainContent">
          <h2 className="mainTitle">
            Great style with greater purpose,
            <br />
            pre-loved fashion made just for you
          </h2>
        </div>
      </section>

      <section className="about">
        <div className="aboutImageWrapper">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e35c4fede807d17d38d3f27d8a568aa2913219a92570d6bdb73622329ad0a1d8?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" alt="" className="aboutImage" />
          <button className="aboutButton" onClick={goToAbout}>About Us</button>
        </div>
        <div className="aboutContent">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a7923dd04aa2cfbe7a50989f902bca14d32f6a25f277b4a1443d7103f9038b7?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" alt="" className="decorativeImage" />
          <h2 className="aboutTitle">Welcome to Thrift & Thrive!</h2>
          <p className="aboutText">
            We bring you high-quality, stylish pre-loved clothing that's ethically sourced and sustainably curated.
            At Thrift & Thrive, we're passionate about creating a win-win experience for our customers and the planet.
            By embracing second-hand fashion, you're contributing to a greener future while enjoying unique styles at affordable prices.
          </p>
        </div>
      </section>


      <section className="categories">
        <div className="categoryGrid">
          <div className="categoryCard">
            <img src="./asset/men.jpg" alt="Men's Fashion" className="categoryImage" onClick={() => navigate('/men')}/>
            <div className="categoryLabel">Men</div>
          </div>
          <div className="categoryCard">
            <img src="./asset/fashion.png" alt="Women's Fashion" className="categoryImage" onClick={() => navigate('/women')}/>
            <div className="categoryLabel">Women</div>
          </div>
          <div className="categoryCard">
            <img src="./asset/kids.jpg" alt="Kid's Fashion" className="categoryImage" onClick={() => navigate('/kids')}/>
            <div className="categoryLabel">Kids</div>
          </div>
          <div className="categoryCard">
            <img src="./asset/hat.png" alt="Accessories' Fashion" className="categoryImage" onClick={() => navigate('/accessories')}/>
            <div className="categoryLabel">Accessories</div>
          </div>
        </div>
      </section>

      <section className="products">
        <h2 className="home-sectionTitle">New Styles Added Daily</h2>
        <div className="productGrid">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} {...product} />
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

      <Footer />
    </main>
  );
}

export default Homepage;
