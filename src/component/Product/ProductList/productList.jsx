import React from 'react';
import './productList.css'
import { SHOP_PRODUCTS } from '../../../utils/data';
import ProductCard from '../ProductCard/productCard';

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
            id={index + 1} // Assigning ID based on index + 1 since shop_product does not have an ID
        />
        ))}
    </section>
    );
};

export default ProductList;