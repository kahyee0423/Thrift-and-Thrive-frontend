import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const signIn = useCallback(async (email, password, isAdminLogin = false) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8000/api/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const userData = await response.json();
            
            // Check if trying to access admin login with non-admin role
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