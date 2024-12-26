import React from 'react';
import './productList.css'
import ProductCard from '../ProductCard/productCard';
import { SHOP_PRODUCTS } from '../../utils/data';

const ProductList = ({ category, currentPage, productsPerPage }) => {
    
    const filteredProducts = SHOP_PRODUCTS.filter(product => {
        return product.category === category;
    });
    console.log("Filtered Products:", filteredProducts);
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);
    console.log("Displayed Products:", displayedProducts)
    
    return (
    <section aria-label="Product Listings">
        {displayedProducts.map((product, index) => (
        <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            id={index + 1} 
        />
        ))}
    </section>
    );
};

export default ProductList;