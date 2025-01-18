import React, { useState, useEffect } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';

const Profile = () => {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (user && user.email) {
                try {
                    console.log('Fetching details for user:', user.email);
                    const response = await fetch(`http://localhost:8000/api/users/details/${user.email}`);
                    console.log('Response status:', response.status);
                    if (response.ok) {
                        const data = await response.json();
                        console.log('Received user details:', data);
                        setUserDetails(data);
                        setLoading(false);
                    } else {
                        const errorData = await response.json();
                        console.error('Failed to fetch user details:', errorData);
                        setError(errorData.error || 'Failed to fetch user details');
                        setLoading(false);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    setError(error.message);
                    setLoading(false);
                }
            } else {
                console.log('No user email available');
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [user]);

    console.log('Current state:', { loading, error, userDetails });

    const handleSignOut = () => {
        signOut();
        navigate('/');
    }

    if (loading) {
        console.log('Rendering loading state');
        return (
            <section className="userProfile">
                <h2 className="sectionTitle">My Account</h2>
                <div className="userInfo">
                    <div className="loading-message">
                        <div className="spinner"></div>
                        <p>Loading user details...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        console.log('Rendering error state');
        return (
            <section className="userProfile">
                <h2 className="sectionTitle">My Account</h2>
                <div className="userInfo">
                    <div className="error-message">
                        <p>Error: {error}</p>
                    </div>
                </div>
            </section>
        );
    }

    if (!userDetails) {
        console.log('Rendering no details state');
        return (
            <section className="userProfile">
                <h2 className="sectionTitle">My Account</h2>
                <div className="userInfo">
                    <p>No user details available</p>
                </div>
            </section>
        );
    }

    console.log('Rendering user details:', userDetails);
    return (
        <section className="userProfile" aria-label="User profile information">
            <h2 className="sectionTitle">My Account</h2>
            <div className="userInfo">
                {userDetails && (
                    <>
                        <p className="userDetail">
                            <strong>Email address:</strong>
                            <span>{userDetails.email}</span>
                        </p>
                        <p className="userDetail">
                            <strong>User ID:</strong>
                            <span>{userDetails.id}</span>
                        </p>
                        <p className="userDetail">
                            <strong>Account Type:</strong>
                            <span>{userDetails.role.charAt(0).toUpperCase() + userDetails.role.slice(1)}</span>
                        </p>
                    </>
                )}
                <button 
                    className="signOutButton"
                    onClick={handleSignOut}
                    aria-label="Sign out of your account"
                >
                    <img src="./asset/logout.png" alt="" className="signOutIcon" />
                    <span>Sign out</span>
                </button>
            </div>
        </section>
    );
}

export default Profile; 