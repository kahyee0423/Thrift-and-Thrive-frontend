import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './UserSignUp.css';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';

const UserSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signUp, loading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            await signUp(email, password);
        } catch (error) {
            console.error('Sign up failed:', error);
        }
    };

    return (
        <div className="loginPage">
            <NavigationBar />
            <main className="mainContent">
                <form onSubmit={handleSubmit} className="loginForm">
                    <h1 className="formTitle">Create Account</h1>
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
                    <div className="formGroup">
                        <input
                            type="password"
                            className="formInput"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submitButton" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                    <Link to="/UserLogin" className="createAccount">
                        Already have an account? Sign In
                    </Link>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default UserSignUp; 