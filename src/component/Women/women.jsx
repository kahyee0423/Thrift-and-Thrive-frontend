import React, { useState } from 'react';
import './women.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import SideBar from '../SideBar/SideBar';
import { SHOP_PRODUCTS } from '../../utils/data';
import ProductList from '../ProductList/productList';

const productsPerPage = 12;

const womenFilters = [
  { title: 'Category', options: ["Dresses", "Tops & Blouses", "Skirts", "Ethnic Wear"] },
  { title: 'Price range', options: ["$0 - $50", "$51 - $100", "$101 - $200"] }
];

const Women = () => {
  const [currentPage, setCurrentPage] = useState(1);
    
  const totalPages = Math.ceil(SHOP_PRODUCTS.filter(product => product.category === "women").length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const goToPage = (page) => {
    setCurrentPage(page)
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <main className="Page">
      <NavigationBar />
      
      <img
        src="./asset/women3.jpg"
        alt="Women's Collection Banner"
        className="banner"
      />
      
      <h1 className="pageTitle">Women's Collection</h1>
      
      <div className="contentWrapper">
        <div className="sideBarAndProductList">
        <SideBar filters={womenFilters} />

          <section className="productsGrid">
          <ProductList category="women" currentPage={currentPage} productsPerPage={productsPerPage} />
          </section>
        </div>

        <div className="paginationWrapper">
        <div className="pagination">
          <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/4f7e95dda55a307aca27925c6d27fd04317fe0e7d999525ef33bacc427211444?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="Previous page" className="paginationIcon" onClick={goToPreviousPage} />
          {pageNumbers.map((number) => (
                  <span
                    key={number}
                    className={`pageNumber ${currentPage === number ? "active" : ""}`}
                    onClick={() => goToPage(number)}
                  >
                    {number}
                  </span>
              ))}
          <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/5a0728a287c40c52aa4fff3691c1876efa4f8bfbc04804cbdae35788467475a4?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="Next page" className="paginationIcon" onClick={goToNextPage} />
        </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Women;