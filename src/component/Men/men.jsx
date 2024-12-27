import React, { useState } from 'react';
import './men.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import SideBar from '../SideBar/SideBar';
import { SHOP_PRODUCTS } from '../../utils/data';
import ProductList from '../ProductList/productList';

const productsPerPage = 12;

const menFilters = [
  { title: 'Category', options: ["T-Shirts & Polos", "Shirts", "Jeans", "Hoodies & Sweatshirts"] },
  { title: 'Price range', options: ["$0 - $50", "$51 - $100", "$101 - $200"] }
];

const Men = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(SHOP_PRODUCTS.filter(product => product.category === "men").length / productsPerPage);
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
        src="./asset/men-1.jpg"
        alt="Men's Collection Banner"
        className="banner"
      />
      
      <h1 className="pageTitle">Men's Collection</h1>
      
      <div className="contentWrapper">
        <div className="sideBarAndProductList">
        <SideBar filters={menFilters} />

          <section className="productsGrid">
              <ProductList category="men" currentPage={currentPage} productsPerPage={productsPerPage} />
          </section>
        </div>
        <div className="paginationWrapper">
        <div className="pagination">
          <img src="./asset/left-arrow.png" alt="Previous page" className="paginationIcon" onClick={goToPreviousPage} />
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
  );
}

export default Men;