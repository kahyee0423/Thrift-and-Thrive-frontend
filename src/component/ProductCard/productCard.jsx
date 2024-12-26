import React from 'react';
import './productCard.css';
import { useNavigate } from 'react-router-dom'; 

const ProductCard = ({ image, title, price, description, id }) => {
    const navigate = useNavigate();
        
    const handleCardClick = () => {
        navigate(`/ProductDetails/${id}`);
    };
    return (
        <article className="productCard" onClick={handleCardClick}>
            <img loading="lazy" src={image} alt={title} className="productImage" />
            <div className="productContent">
                <h2 className="productTitle">{title}</h2>
                <div className="productPrice" aria-label={`Price: ${price}`}>
                    RM {price}
                </div>
                <p className="productDescription">{description}</p>
            </div>
        </article>
    );
};

export default ProductCard;