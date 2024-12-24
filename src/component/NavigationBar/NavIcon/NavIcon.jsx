import React from 'react';
import './NavIcon.css';

const NavIcon = ({ src, alt, isCart }) => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={isCart ? 'cartIcon' : 'icon'}  
        />
    );
};

export default NavIcon;
