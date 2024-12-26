import React from 'react';
import './ProductDetails.css';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';
import { useParams } from 'react-router-dom';
import { productDetails, mockProducts } from '../../../utils/data';
import ProductCard from '../ProductCard/productCard';

const ProductDetails = () => {
  const { id } = useParams();
    const product = mockProducts.find((p) => p.id === parseInt(id))

  if (!product) {
    return <p>Product not found</p>;
  }
  const {  description, category, image, title, price, id:productId} = product;
  const { condition, materials, shippingInfo, sizeMeasurements, relatedProducts } = productDetails
  const relatedProductsList = relatedProducts.filter(p => p.category === category).slice(0,3);
    
  return (
    <div className="productDetailsContainer">
      <NavigationBar />
      <main className="mainContent" role="main">
        <section className="productSection">
          <div className="productImageContainer">
            <img 
              src={image} 
              alt={title} 
              className="productImage"
            />
          </div>
          <div className="productInfo">
            <h1 className="productTitle">{title}</h1>
            <p className="productPrice">RM {price}</p>
            <p className="productCondition">
              Condition: <span className="conditionValue">{condition}</span>
            </p>
            <button 
              className="addToCartButton"
              aria-label={`Add ${title} to cart`}
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
              {sizeMeasurements?.chest ? <p>Chest: {sizeMeasurements.chest}</p> : null}
              {sizeMeasurements?.length ? <p>Length: {sizeMeasurements.length}</p> : null}
                {sizeMeasurements?.shoulders ? <p>Shoulders: {sizeMeasurements.shoulders}</p> : null}
                {sizeMeasurements?.sleeves ? <p>Sleeves: {sizeMeasurements.sleeves}</p> : null}
                 {sizeMeasurements?.fit ? <p>Fit: {sizeMeasurements.fit}</p> : null}
              </div>
              
              <button 
                className="accordionButton"
                aria-expanded="false"
                aria-controls="materials-content"
              >
                Materials
                <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/3358615032dbabcc29fa5bad7a971ff30499cf88dec23cf3bc516c09e474e8b8?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="" className="accordionIcon" />
              </button>
              <div id="materials-content" className="accordionContent" hidden>
              {materials?.main ? <p>Main Material: {materials.main}</p> : null}
              {materials?.secondary ? <p>Secondary Material: {materials.secondary}</p> : null}
                  {materials?.care ? (
                    <ul>
                        {materials.care.map((item, index) => (<li key={index}>{item}</li>))}
                     </ul>
                  ) : null}
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
                    <p>Shipping Methods</p>
                    <ul>
                        {shippingInfo?.methods.map((method, index) => (
                            <li key={index}>
                                {method.name}: RM {method.price} ({method.duration})
                            </li>
                        ))}
                      </ul>
                      {shippingInfo?.returns ? (<>
                         <p>Returns Policy</p>
                        <p>Window: {shippingInfo.returns.window}</p>
                         <p>Condition: {shippingInfo.returns.condition}</p>
                         <p>Refund: {shippingInfo.returns.refund}</p>
                         </>) : null }
                 
              </div>
            </div>
          </div>
        </section>
        
        <section className="relatedProducts" aria-labelledby="related-products-title">
          <h2 id="related-products-title" className="relatedProductsTitle">
            YOU MAY ALSO LIKE
          </h2>
          <div className="relatedProductsGrid">
              {relatedProductsList.map((relatedProduct, index) => (
                  <ProductCard key={index} {...relatedProduct} description={'A great product!'}/>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetails;