import React from 'react'
import './ProductTable.css'

const products = [{
    id: 1,
    name: 'Charcoal Black Top',
    category: 'Women',
    price: '20.00',
    condition: 'Like new',
    measurements: {
      chest: '38 inches / 96.5 cm',
      shoulder: '16 inches / 40.6 cm',
      sleeve: '22 inches / 55.9 cm',
      length: '25 inches / 63.5 cm'
    },
    materials: 'High-quality 100% Cotton.\nSoft, breathable, and durable.'
  }];

const ProductTable = () => {
    return (
        <main className="product-productListContainer" role="main">
          <div className="product-header">
            <h2 className="product-title">Product list</h2>
            <button className="product-addButton" aria-label="Add new item">
              <img src="./asset/add.png" alt="" className="addIcon" />
              <span>Add item</span>
            </button>
          </div>
          
          <div className="product-productGrid">
            <div className="product-gridHeader">
              <span>No</span>
              <span>Items</span>
              <span>Category</span>
              <span>Price (RM)</span>
              <span>Condition</span>
              <span>Measurement</span>
              <span>Materials</span>
              <span>Actions</span>
            </div>
            
            {products.map(product => (
              <div key={product.id} className="product-productItem">
                <span>{product.id}</span>
                <span>{product.name}</span>
                <span>{product.category}</span>
                <span>{product.price}</span>
                <span>{product.condition}</span>
                <div className="product-measurements">
                  {Object.entries(product.measurements).map(([key, value]) => (
                    <div key={key}>{value}</div>
                  ))}
                </div>
                <span className="product-materials">{product.materials}</span>
                <span className="product-actions">
                  <img
                      src="./asset/action-button.png"
                      className="customer-actionIcon"
                      alt="Edit customer"
                      role="button"
                      tabIndex="0"
                    />
                </span>
              </div>
            ))}
          </div>
        </main>
      );
}

export default ProductTable