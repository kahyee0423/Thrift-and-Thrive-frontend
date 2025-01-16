import React from 'react';
import { useAuth } from '../../../../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AdminMainPage.css';

const AdminMainPage = () => {
    const { user, isAdmin } = useAuth();

    if (!user || !isAdmin) {
        return <Navigate to="/AdminLogin" />;
    }

    return (
        <div className="mainpage-adminContainer">
            <div className="mainpage-contentWrapper">
                <div className="mainpage-sidebarColumn">
                    <AdminSideBar />
                </div>
                <div className="mainpage-main">
                    <h1>Welcome to Admin Dashboard</h1>
                </div>
            </div>
        </div>
    );
};

export default AdminMainPage; 