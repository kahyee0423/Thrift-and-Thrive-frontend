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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3fc4e36b43285dfd90ea72f93d96b821206634db00e5a5cc61e369bad441939?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" 
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