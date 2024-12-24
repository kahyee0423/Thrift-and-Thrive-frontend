import React from 'react';
import './productCard.css';

const ProductCard = ({ image, title, price, description }) => {
    return (
        <article className="productCard">
          <img src={image} alt={title} className="productImage" />
          <div className="productInfo">
            <h3 className="productTitle">{title}</h3>
            <p className="productPrice">{price}</p>
            <p className="productDescription">{description}</p>
          </div>
        </article>
    );
}

export default ProductCard;