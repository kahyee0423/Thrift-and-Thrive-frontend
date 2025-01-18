import React from 'react'
import './Account.css'
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';
import OrderHistory from './OrderHistory/OrderHistory';
import Profile from './Profile/Profile';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Account = () => {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="accountPage">
                <NavigationBar />
                <main className="mainContent">
                    <div className="not-signed-in">
                        <h2>Not Signed In</h2>
                        <p>Please sign in to view your account details.</p>
                        <div className="auth-buttons">
                            <Link to="/UserSignIn" className="auth-button">
                                Sign In
                            </Link>
                            <Link to="/UserSignUp" className="auth-button">
                                Create Account
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="accountPage">
            <NavigationBar />
            <main className="mainContent">
                <Profile />
                <hr className="account-divider" aria-hidden="true" />
                <OrderHistory userId={user?.id} />
                {/* Debug output */}
                {process.env.NODE_ENV === 'development' && (
                    <div style={{ display: 'none' }}>
                        Debug - User ID: {user?.id}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Account; 