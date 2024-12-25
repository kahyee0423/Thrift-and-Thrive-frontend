import React from 'react';
import './productCard.css';

const ProductCard = ({ image, title, price, description }) => {
  return (
    <article className="productCard">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="productImage"
      />
      <div className="productContent">
        <h2 className="productTitle">{title}</h2>
        <div className="productPrice" aria-label={`Price: ${price}`}>
          {price}
        </div>
        <p className="productDescription">{description}</p>
      </div>
    </article>
  );
}

export default ProductCard;