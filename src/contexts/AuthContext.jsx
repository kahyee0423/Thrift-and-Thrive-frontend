import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Check localStorage for saved user data on initial load
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signIn = useCallback(async (email, password, isAdminLogin = false) => {
        setLoading(true);
        setError(null);
        try {
            console.log('Attempting sign-in for:', email);
            const response = await fetch('http://localhost:8000/api/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, 
                    password,
                    isAdminLogin
                }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                console.error('Sign-in failed:', data.error);
                throw new Error(data.error || 'Invalid credentials');
            }

            const userData = data;
            
            if (!isAdminLogin && userData.role === 'admin') {
                throw new Error('Administrators must use the admin login page');
            }

            if (isAdminLogin && userData.role !== 'admin') {
                throw new Error('Unauthorized: Admin access only');
            }

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            alert('Login successful!');
            
            // Redirect based on role and login type
            if (isAdminLogin && userData.role === 'admin') {
                navigate('/AdminPanel');
            } else if (!isAdminLogin) {
                navigate('/');
            }

            return userData;
        } catch (err) {
            setError(err.message);
            console.error('Sign-in error:', err);
            alert(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    const signUp = useCallback(async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Sign up failed');
            }

            const userData = await response.json();
            alert('Sign up successful! Please sign in.');
            navigate('/UserLogin');
            return userData;
        } catch (err) {
            setError(err.message);
            alert(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    const signOut = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
    }, [navigate]);

    // Effect to sync user state with localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const value = {
        user,
        loading,
        error,
        signIn,
        signUp,
        signOut,
        isAdmin: user?.role === 'admin'
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 