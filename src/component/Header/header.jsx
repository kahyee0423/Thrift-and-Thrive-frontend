import React from 'react'
import './header.css';

const header = () => {
    return (
        <header className="header">
          <nav className="navigation">
            <div className="links">
              <a href="/" className="link">Home</a>
              <a href="/contact" className="link">Contact Us</a>
            </div>
            <h1 className="brand">Thrift & Thrive</h1>
            <div className="socialIcons">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/36bd4803749ebf16a297874d8258a6451d3e7e1c17d1de5765715dae049b01c0?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" alt="" className="icon" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbe2ec369d8b7b55d00b115c6082130fcd6fb6ee04a6e1f6d3b964407de76cb2?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" alt="" className="icon"/>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/17d5135b7486aa3c4a854e8f937b6ce2bafe4c45bfbcc3829df8ebfcf7088d96?placeholderIfAbsent=true&apiKey=904907665fd04df7b56e80ff4b56e284" alt="" className="icon" />
            </div>
          </nav>
          <nav className="categoryNav">
            <ul className="categories">
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/accessories">Accessories</a></li>
            </ul>
          </nav>
        </header>
      );
}

export default header;