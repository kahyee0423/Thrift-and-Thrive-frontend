import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './UserSignIn.css';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';

const UserSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, loading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password, false);
        } catch (error) {
            console.error('Sign in failed:', error);
        }
    };

    return (
        <div className="loginPage">
            <NavigationBar />
            <main className="mainContent">
                <form onSubmit={handleSubmit} className="loginForm">
                    <h1 className="formTitle">Sign In</h1>
                    <div className="formGroup">
                        <input
                            type="email"
                            className="formInput"
                            placeholder="Email"
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
                    <Link to="/forgot-password" className="forgotPassword">
                        Forgot Password?
                    </Link>
                    <button type="submit" className="submitButton" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                    <Link to="/UserSignUp" className="createAccount">
                        Don't have an account? Sign Up
                    </Link>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default UserSignIn; 