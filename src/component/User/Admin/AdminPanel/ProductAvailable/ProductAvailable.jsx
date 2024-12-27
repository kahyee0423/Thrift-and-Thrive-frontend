import React from 'react'
import './ProductAvailable.css'
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ProductTable from './ProductTable/ProductTable';

const ProductAvailable = () => {
  return (
    <div className="product-adminLayout">
      <div className="product-container">
        <div className="product-sidebar">
          <AdminSideBar />
        </div>
        <div className="product-mainContent">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default ProductAvailable