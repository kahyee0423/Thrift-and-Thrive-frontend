import React from 'react'
import './kids.css'
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import ProductCard from '../ProductCard/productCard';
import SideBar from '../SideBar/SideBar';

const products = Array(12).fill({
  image: "https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/9ccdd56b6dadb8838db5b38d01ae2d77da2ff92f4582e0c18c4b19697847d7d6?apiKey=904907665fd04df7b56e80ff4b56e284&",
  title: "Text",
  price: "0",
  description: "Body text."
});

const kidsFilters = [
  { title: 'Category', options: ["T-Shirts & Tops", "Shorts & Pants", "Dresses", "Rompers"] },
  { title: 'Price range', options: ["$0 - $50", "$51 - $100", "$101 - $200"] }
];

const kids = () => {
  return (
    <main className="Page">
      <NavigationBar />
      
      <img
        src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/d5ea5cec4a1c048758162fc4af9c372bef9895db4c233d61dab94ea29b96b9cd?apiKey=904907665fd04df7b56e80ff4b56e284&"
        alt="Kids's Collection Banner"
        className="banner"
      />
      
      <h1 className="pageTitle">Kids's Collection</h1>
      
      <div className="contentWrapper">
        <div className="sideBarAndProductList">
        <SideBar filters={kidsFilters} />

          <section className="productsGrid">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </section>
        </div>

        <div className="pagination">
          <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/4f7e95dda55a307aca27925c6d27fd04317fe0e7d999525ef33bacc427211444?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="Previous page" className="paginationIcon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/5a0728a287c40c52aa4fff3691c1876efa4f8bfbc04804cbdae35788467475a4?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="Next page" className="paginationIcon" />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default kids