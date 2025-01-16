import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import './AdminLogin.css';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, loading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Pass true as the third argument to indicate admin login
            await signIn(email, password, true);
        } catch (error) {
            console.error('Admin login failed:', error);
        }
    };

    return (
        <div className="loginPage">
            <NavigationBar />
            <main className="mainContent">
                <form onSubmit={handleSubmit} className="loginForm">
                    <h1 className="formTitle">Admin Login</h1>
                    <div className="formGroup">
                        <input
                            type="email"
                            className="formInput"
                            placeholder="Admin Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            type="password"
                            className="formInput"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submitButton" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In as Admin'}
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default AdminLogin; 