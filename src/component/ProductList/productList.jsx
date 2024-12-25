import React from 'react'
import {ProductCard} from '../ProductCard/productCard.jsx'
import { PRODUCTS } from '../../utils/data';

const ProductList = () => {
    const products = [
        {
          image: "https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/1b9f30d03a8c4ffad86a7ccc1c43df50d9de4149568c0d1e19afad14d02b6721?apiKey=904907665fd04df7b56e80ff4b56e284&",
          title: "Text",
          price: "$0",
          description: "Body text."
        }
      ];
    
      return (
        <section aria-label="Product Listings">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </section>
      );
}

export default ProductList;