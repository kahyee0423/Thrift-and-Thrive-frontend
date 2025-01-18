import React from 'react';
import './kids.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import ProductList from '../ProductList/productList';

const productsPerPage = 12;

const Kids = () => {
  return (
      <main className="Page">
        <NavigationBar />

        <img
            src="./asset/kids-2.jpg"
            alt="Kids' Collection Banner"
            className="banner"
        />

        <h1 className="pageTitle">Kids' Collection</h1>

        <div className="contentWrapper">
          <section className="productsGrid">
            <ProductList category="kids" productsPerPage={productsPerPage} />
          </section>
        </div>

        <Footer />
      </main>
  );
};

export default Kids;
