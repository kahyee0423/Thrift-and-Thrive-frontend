import React from 'react';
import './women.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/footer';
import { SHOP_PRODUCTS } from '../../utils/data';
import ProductList from '../ProductList/productList';

const productsPerPage = 18;

const Women = () => {
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
                <section className="productsGrid">
                    <ProductList category="women" productsPerPage={productsPerPage} />
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default Women;
