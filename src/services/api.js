const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const defaultOptions = {
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors'
};

export const api = {
    // Product endpoints
    async getAllProducts(category, page = 1, limit = 12) {
        try {
            const queryParams = new URLSearchParams({
                ...(category && { category }),
                page: page.toString(),
                limit: limit.toString()
            });
            
            const url = `${API_BASE_URL}/products?${queryParams}`;
            console.log('Fetching products from:', url);
            
            const response = await fetch(url, {
                method: 'GET',
                ...defaultOptions
            });
            
            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch products');
            }
            
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    async getProduct(id) {
        const response = await fetch(`${API_BASE_URL}/products?id=${id}`, defaultOptions);
        if (!response.ok) throw new Error('Failed to fetch product');
        return await response.json();
    },

    // Cart endpoints
    async getCart(userId) {
        try {
            const response = await fetch(`${API_BASE_URL}/cart?userId=${userId}`, defaultOptions);
            if (!response.ok) throw new Error('Failed to fetch cart');
            const data = await response.json();
            console.log('Cart data from API:', data);
            return data;
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    },

    async updateCartItem(userId, productId, quantity) {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            method: 'POST',
            ...defaultOptions,
            body: JSON.stringify({ userId, productId, quantity })
        });
        if (!response.ok) throw new Error('Failed to update cart');
        return await response.json();
    },

    async removeFromCart(userId, productId) {
        try {
            const response = await fetch(
                `${API_BASE_URL}/cart?userId=${userId}&productId=${productId}`,
                {
                    method: 'DELETE',
                    ...defaultOptions
                }
            );

            if (!response.ok) {
                throw new Error('Failed to remove item from cart');
            }

            const data = await response.json();
            console.log('Remove from cart response:', data);
            return data;
        } catch (error) {
            console.error('Error removing from cart:', error);
            throw error;
        }
    },

    // Order endpoints
    async createOrder(userId, shippingAddress) {
        try {
            console.log('Creating order for user:', userId);
            console.log('Shipping address:', shippingAddress);

            const response = await fetch(`${API_BASE_URL}/orders`, {
                method: 'POST',
                ...defaultOptions,
                body: JSON.stringify({
                    userId,
                    shippingAddress
                })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to create order');
            }

            const order = await response.json();
            console.log('Order created:', order);
            return order;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    },

    async getUserOrders(userId) {
        try {
            const response = await fetch(`${API_BASE_URL}/orders?userId=${userId}`, defaultOptions);
            if (!response.ok) throw new Error('Failed to fetch orders');
            const orders = await response.json();
            console.log('User orders:', orders);
            return orders;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    },

    // Checkout helper methods
    async validateShippingAddress(address) {
        // Add any client-side validation here
        const required = ['fullName', 'address', 'city', 'state', 'postalCode', 'phone'];
        const missing = required.filter(field => !address[field]);
        
        if (missing.length > 0) {
            throw new Error(`Missing required fields: ${missing.join(', ')}`);
        }

        return true;
    },

    async processCheckout(userId, shippingAddress) {
        try {
            // 1. Validate shipping address
            await this.validateShippingAddress(shippingAddress);

            // 2. Create the order
            const order = await this.createOrder(userId, shippingAddress);

            // 3. Return the created order
            return order;
        } catch (error) {
            console.error('Checkout process failed:', error);
            throw error;
        }
    }
};

// Export individual functions for direct use
export const { getCart, createOrder, getUserOrders, processCheckout } = api; 