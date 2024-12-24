import React from 'react'
import {ProductCard} from '../ProductCard/productCard.jsx'
import { PRODUCTS } from '../../utils/data';

const ProductList = () => {
    return (
        <div className="productList">
            {PRODUCTS.map((product, index) => (
                <ProductCard 
                    key={index} 
                    image={product.image} 
                    title={product.title} 
                    price={product.price} 
                    description={product.description} 
                />
            ))}
        </div>
    );
}

export default ProductList;