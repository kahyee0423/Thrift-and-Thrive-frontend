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
                {/* Sidebar Section */}
                <div className="mainpage-sidebarColumn">
                    <AdminSideBar />
                </div>

                {/* Main Content Section */}
                <div className="mainpage-main">
                    <header className="mainpage-header">
                        <h1>Welcome, Admin</h1>
                        <p>Here's an overview of your admin dashboard.</p>
                    </header>

                    {/* Dashboard Widgets */}
                    <div className="mainpage-dashboardWidgets">
                        <div className="widget">
                            <h3>Total Users</h3>
                            <p>1</p>
                        </div>
                        <div className="widget">
                            <h3>Active Sessions</h3>
                            <p>1</p>
                        </div>
                        <div className="widget">
                            <h3>Pending Tasks</h3>
                            <p>0</p>
                        </div>
                        <div className="widget">
                            <h3>System Health</h3>
                            <p>Good</p>
                        </div>
                    </div>

                    {/* Additional Content */}
                    <section className="mainpage-reports">
                        <h2>Recent Activities</h2>
                        <ul>
                            <li>User JohnDoe updated profile settings.</li>
                            <li>Admin added new blog post: "Security Tips".</li>
                            <li>1 users registered in the last 24 hours.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AdminMainPage;
