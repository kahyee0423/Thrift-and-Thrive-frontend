import React from 'react';
import './NavLink.css';

const NavLink = ({ text, href }) => {
    return (
        <a href={href} className="navLink">{text}</a>
      );
};

export default NavLink;