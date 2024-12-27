import React from 'react'
import './reviewCard.css';

const reviewCard = ({ rating, review, author }) => {
    const stars = Array(rating).fill(null);
    
    return (
      <article className="reviewCard">
        <div className="stars">
          {stars.map((_, index) => (
            <img 
              key={index}
              src="./asset/star-pic.png" 
              alt="" 
              className="star"
            />
          ))}
        </div>
        <p className="reviewText">{review}</p>
        <div className="author">
          <div className="authorAvatar" />
          <span className="authorName">{author}</span>
        </div>
      </article>
    );
}

export default reviewCard;