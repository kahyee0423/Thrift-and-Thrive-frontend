import React, { useState, useEffect } from 'react';
import { adminApi } from '../../../../../services/adminApi';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './CustomerDetails.css';

const CustomerDetails = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        try {
            const data = await adminApi.getCustomers();
            console.log('Loaded customers:', data); // Debug log
            setCustomers(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Failed to load customers:', error);
            setCustomers([]); // Set empty array on error
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading customers...</div>;
    }

    return (
        <div className="customer-adminContainer">
            <div className="customer-contentWrapper">
                <div className="customer-sidebarColumn">
                    <AdminSideBar />
                </div>
                <div className="customer-mainColumn">
                    <h2>Customer Management</h2>
                    <table className="customer-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.role}</td>
                                    <td>
                                        <img
                                            src="./asset/action-button.png"
                                            className="customer-actionIcon"
                                            alt="Edit customer"
                                            role="button"
                                            tabIndex="0"
                                            onClick={() => console.log('Edit customer:', customer.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails; 