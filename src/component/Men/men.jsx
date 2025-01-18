// Men.js
import React, { useState } from 'react';
import './men.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import ProductList from '../ProductList/productList';

const productsPerPage = 18;

const Men = () => {
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
                <section className="productsGrid">
                    <ProductList category="men" productsPerPage={productsPerPage} />
                </section>
            </div>

            <Footer />
        </main>
    );
}

export default Men;
