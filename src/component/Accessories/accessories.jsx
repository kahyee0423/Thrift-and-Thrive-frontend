import React from 'react';
import './accessories.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import ProductList from '../ProductList/productList';

const productsPerPage = 12;

const Accessories = () => {
    return (
        <main className="Page">
            <NavigationBar />

            <img
                src="./asset/accessories-2.png"
                alt="Accessories' Collection Banner"
                className="banner"
            />

            <h1 className="pageTitle">Accessories' Collection</h1>

            <div className="contentWrapper">
                <section className="productsGrid">
                    <ProductList category="accessories" productsPerPage={productsPerPage} />
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default Accessories;
