import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/users/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    newPassword
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Password successfully changed! Please sign in with your new password.');
                navigate('/UserLogIn');
            } else {
                console.error('Reset password error:', data);
                setMessage(data.error || 'Failed to reset password');
            }
        } catch (error) {
            console.error('Network error:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgotPasswordPage">
            <NavigationBar />
            <main className="mainContent">
                <form onSubmit={handleSubmit} className="resetPasswordForm">
                    <h1 className="formTitle">Reset Password</h1>
                    {message && <div className="errorMessage">{message}</div>}
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
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            type="password"
                            className="formInput"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submitButton" disabled={loading}>
                        {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default ForgotPassword; 