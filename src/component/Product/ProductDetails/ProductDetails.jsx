import React from 'react'
import './ProductDetails.css'
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';
import ProductCard from '../ProductCard/productCard';

const ProductDetails = () => {
  return (
    <div className="productDetailsContainer">
      <NavigationBar />
      <main className="mainContent" role="main">
        <section className="productSection">
          <div className="productImageContainer">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/048bdf5fc2213e727373d1cbeca7cc74d60c02d37abb796e43dd2d1aaa768179?apiKey=904907665fd04df7b56e80ff4b56e284&" 
              alt="Brown Regular Fit Top" 
              className="productImage"
            />
          </div>
          <div className="productInfo">
            <h1 className="productTitle">Brown Regular Fit Top</h1>
            <p className="productPrice">RM 20.00</p>
            <p className="productCondition">
              Condition: <span className="conditionValue">Like New</span>
            </p>
            <button 
              className="addToCartButton"
              aria-label="Add Brown Regular Fit Top to cart"
            >
              Add to Cart
            </button>

            <div className="accordionContainer">
              <button 
                className="accordionButton"
                aria-expanded="false"
                aria-controls="size-content"
              >
                Size/Measurement
                <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/3358615032dbabcc29fa5bad7a971ff30499cf88dec23cf3bc516c09e474e8b8?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="" className="accordionIcon" />
              </button>
              <div id="size-content" className="accordionContent" hidden>
              </div>
              
              <button 
                className="accordionButton"
                aria-expanded="false"
                aria-controls="materials-content"
              >
                Materials
                <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/3358615032dbabcc29fa5bad7a971ff30499cf88dec23cf3bc516c09e474e8b8?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="" className={styles.accordionIcon} />
              </button>
              <div id="materials-content" className="accordionContent" hidden>
              </div>

              <button 
                className="accordionButton"
                aria-expanded="false"
                aria-controls="shipping-content"
              >
                Shipping & Return
                <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/3358615032dbabcc29fa5bad7a971ff30499cf88dec23cf3bc516c09e474e8b8?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="" className="accordionIcon" />
              </button>
              <div id="shipping-content" className="accordionContent" hidden>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relatedProducts" aria-labelledby="related-products-title">
          <h2 id="related-products-title" className="relatedProductsTitle">
            YOU MAY ALSO LIKE
          </h2>
          <div className="relatedProductsGrid">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetails