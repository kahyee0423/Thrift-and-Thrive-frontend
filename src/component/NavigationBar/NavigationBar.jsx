import React from 'react';
import './NavigationBar.css';
import UserMenu from '../BarComponent/UserMenu/UserMenu';
import NavigationLink from './NavLink/NavLink.jsx';
import NavigationIcon from './NavIcon/NavIcon.jsx';
import { useNavigate } from 'react-router-dom';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Men', href: '/men' },
  { label: 'Women', href: '/women' },
  { label: 'Kids', href: '/kids' },
  { label: 'Accessories', href: '/accessories' },
];

const icons = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/a37af1c711d1533ab66a4642f365a7f6acad09bb085ab839848501d0064a3f27?apiKey=904907665fd04df7b56e80ff4b56e284&',
    alt: 'Search',
    isCart: false,
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/4e8ddad33e380408f0dd67799991dff5467382018ec127dcac7998458b3af8cc?apiKey=904907665fd04df7b56e80ff4b56e284&',
    alt: 'Shopping Cart',
    isCart: false,
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/e7fb015e3ff753a161ad45ea5de64d6b8613fde2eb5cb3c55873919059f83079?apiKey=904907665fd04df7b56e80ff4b56e284&',
    alt: 'User Account',
    isCart: false,
    isUser: true, 
  },
];


const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigationContainer" role="navigation" aria-label="Main navigation">
      <h1 className="brandName" onClick={() => navigate('/')}>
        Thrift & Thrive
      </h1>
      <div className="navigationLinks">
        {navigationLinks.map((link) => (
          <NavigationLink key={link.href} text={link.label} href={link.href} />
        ))}
      </div>
      <div className="iconContainer">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/36bd4803749ebf16a297874d8258a6451d3e7e1c17d1de5765715dae049b01c0?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" alt="" className="icon" />
              <div className="profileIconContainer">
                 <UserMenu>
                 <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbe2ec369d8b7b55d00b115c6082130fcd6fb6ee04a6e1f6d3b964407de76cb2?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284"
                  alt="Profile Icon"
                  className="icon profileIcon"
                  />
                  </UserMenu>
                </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/17d5135b7486aa3c4a854e8f937b6ce2bafe4c45bfbcc3829df8ebfcf7088d96?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" alt="" className="icon" />
      </div>
    </nav>
  );
};

export default NavigationBar;