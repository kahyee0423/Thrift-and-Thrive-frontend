import { api } from './api';

const ADMIN_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/admin';

export const adminApi = {
    // Product Management
    async getProducts(page = 1, pageSize = 10) {
        try {
            const response = await fetch(
                `${ADMIN_API_URL}/products?page=${page}&pageSize=${pageSize}`,
                {
                    headers: api.getAuthHeaders()
                }
            );
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch products');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    // Customer Management
    async getCustomers() {
        try {
            const response = await fetch(`${ADMIN_API_URL}/admin/users`, {
                headers: api.getAuthHeaders()
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch customers');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching customers:', error);
            throw error;
        }
    },

    // Order Management
    async getOrders() {
        try {
            const response = await fetch(`${ADMIN_API_URL}/admin/orders/all`, {
                headers: api.getAuthHeaders()
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch orders');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    },
    async addProduct(productData) {
        try {
            const response = await fetch(`${ADMIN_API_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...api.getAuthHeaders()
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to add product');
            }

            return await response.json();
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    }
}; 