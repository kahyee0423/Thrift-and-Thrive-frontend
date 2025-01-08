const API_BASE_URL = 'http://localhost:8000/api';

export const api = {
    // Product APIs
    getProducts: async (category, page = 1, limit = 12) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/products?category=${category}&page=${page}&limit=${limit}`
            );
            if (!response.ok) throw new Error('Failed to fetch products');
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    // Cart APIs
    getCart: async (userId) => {
        try {
        const response = await fetch(`${API_BASE_URL}/cart?userId=${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch cart');
            }
        const data = await response.json();
            console.log('Cart data received:', data); // Debug log
            return data;
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    },


    addToCart: async (userId, productId, quantity) => {
        try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
                method: 'POST',
                        headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, productId, quantity })
            });

            if (!response.ok) {
            const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to add to cart');
            }

            return await response.json();
        } catch (error) {
            console.error('Error adding to cart:', error);
            throw error;
        }
    },

    updateCartItem: async (userId, productId, quantity) => {
        try {
            const response = await fetch(`${API_BASE_URL}/cart/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, productId, quantity })
            });
            if (!response.ok) throw new Error('Failed to update cart');
            return await response.json();
        } catch (error) {
            console.error('Error updating cart:', error);
            throw error;
        }
    },

    removeFromCart: async (userId, productId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/cart/remove`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, productId })
            });
            if (!response.ok) throw new Error('Failed to remove item from cart');
            return await response.json();
        } catch (error) {
            console.error('Error removing from cart:', error);
            throw error;
        }
    }
};