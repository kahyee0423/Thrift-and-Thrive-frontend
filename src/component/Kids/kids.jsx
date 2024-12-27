import React, { useState } from 'react';
import './kids.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import SideBar from '../SideBar/SideBar';
import { SHOP_PRODUCTS } from '../../utils/data';
import ProductList from '../ProductList/productList';

const productsPerPage = 12;

const kidsFilters = [
  { title: 'Category', options: ["T-Shirts & Tops", "Shorts & Pants", "Dresses", "Rompers"] },
  { title: 'Price range', options: ["$0 - $50", "$51 - $100", "$101 - $200"] }
];

const Kids = () => {
  const [currentPage, setCurrentPage] = useState(1);
    
  const totalPages = Math.ceil(SHOP_PRODUCTS.filter(product => product.category === "kids").length / productsPerPage);
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
        src="./asset/kids-2.jpg"
        alt="Kids's Collection Banner"
        className="banner"
      />
      
      <h1 className="pageTitle">Kids's Collection</h1>
      
      <div className="contentWrapper">
        <div className="sideBarAndProductList">
        <SideBar filters={kidsFilters} />

          <section className="productsGrid">
          <ProductList category="kids" currentPage={currentPage} productsPerPage={productsPerPage} />
          </section>
        </div>
        <div className="paginationWrapper">
        <div className="pagination">
          <img src="./asset/left-arrow.png" alt="Previous page" className="paginationIcon" onClick={goToPreviousPage}/>
          {pageNumbers.map((number) => (
                  <span
                    key={number}
                    className={`pageNumber ${currentPage === number ? "active" : ""}`}
                    onClick={() => goToPage(number)}
                  >
                    {number}
                  </span>
              ))}
          <img src="./asset/right-arrow.png" alt="Next page" className="paginationIcon" onClick={goToNextPage} />
        </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Kids;