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
                headers: {
                    'Content-Type': 'application/json',
                },
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
        const response = await fetch(`${API_BASE_URL}/products?id=${id}`);
        return await response.json();
    },

    // Cart endpoints
    async getCart(userId) {
        try {
            const response = await fetch(`${API_BASE_URL}/cart?userId=${userId}`);
            const data = await response.json();
            console.log('Cart data from API:', data); // Debug log
            return data;
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    },

    async updateCartItem(userId, productId, quantity) {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId, quantity })
        });
        return await response.json();
    },

    async removeFromCart(userId, productId) {
        try {
            const response = await fetch(
                `${API_BASE_URL}/cart?userId=${userId}&productId=${productId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
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
    async createOrder(userId) {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        });
        return await response.json();
    },

    async getUserOrders(userId) {
        const response = await fetch(`${API_BASE_URL}/orders?userId=${userId}`);
        return await response.json();
    }
}; 