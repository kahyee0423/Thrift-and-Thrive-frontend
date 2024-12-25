import React from 'react'
import './NavigationBar.css'
import NavigationLink from './NavLink/NavLink.jsx';
import NavigationIcon from './NavIcon/NavIcon.jsx';
import { useNavigate } from 'react-router-dom';

const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Men', href: '/men' },
    { label: 'Women', href: '/women' },
    { label: 'Kids', href: '/kids' },
    { label: 'Accessories', href: '/accessories' }
]

const icons = [
  { src: 'https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/a37af1c711d1533ab66a4642f365a7f6acad09bb085ab839848501d0064a3f27?apiKey=904907665fd04df7b56e80ff4b56e284&', alt: 'Search', isCart: false },
  { src: 'https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/4e8ddad33e380408f0dd67799991dff5467382018ec127dcac7998458b3af8cc?apiKey=904907665fd04df7b56e80ff4b56e284&', alt: 'Shopping Cart', isCart: false },
  { src: 'https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/e7fb015e3ff753a161ad45ea5de64d6b8613fde2eb5cb3c55873919059f83079?apiKey=904907665fd04df7b56e80ff4b56e284&', alt: 'User Account', isCart: false }
];

const NavigationBar = () => {

  const navigate = useNavigate();

    return (
        <nav className="navigationContainer" role="navigation" aria-label="Main navigation">
          <h1 className="brandName" onClick={() => navigate('/')}>Thrift & Thrive</h1>
          <div className="navigationLinks">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.href} text={link.label} href={link.href} />
            ))}
          </div>
          <div className="iconContainer">
            {icons.map((icon) => (
              <NavigationIcon
                key={icon.src}
                src={icon.src}
                alt={icon.alt}
                isCart={icon.isCart}
              />
            ))}
          </div>
        </nav>
      );
}

export default NavigationBar;