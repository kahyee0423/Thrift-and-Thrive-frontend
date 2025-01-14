import React, { useState, useEffect } from 'react';
import './Delivery.css';

const MALAYSIAN_STATES = [
    'Johor',
    'Kedah',
    'Kelantan',
    'Melaka',
    'Negeri Sembilan',
    'Pahang',
    'Perak',
    'Perlis',
    'Pulau Pinang',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu',
    'Kuala Lumpur',
    'Labuan',
    'Putrajaya'
];

const Delivery = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        postcode: '',
        city: '',
        state: '',
        phone: '',
        email: '',
        saveInfo: false
    });

    // Load initial data if provided
    useEffect(() => {
        if (initialData) {
            const [firstName, lastName] = initialData.fullName.split(' ');
            setFormData({
                firstName: firstName || '',
                lastName: lastName || '',
                address: initialData.address || '',
                postcode: initialData.postalCode || '',
                city: initialData.city || '',
                state: initialData.state || '',
                phone: initialData.phone || '',
                email: initialData.email || '',
                saveInfo: false
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting delivery form...');
        
        const shippingAddress = {
            fullName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            postalCode: formData.postcode
        };
        
        console.log('Shipping address:', shippingAddress);
        onSubmit(shippingAddress);
    };

    return (
        <form className="deliveryForm" onSubmit={handleSubmit}>
            <h2 className="delivery-sectionTitle">Delivery</h2>
            <div className="delivery-nameGroup">
                <div className="delivery-formGroup">
                    <label htmlFor="firstName" className="delivery-visuallyHidden">
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="delivery-name-input"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="delivery-formGroup">
                    <label htmlFor="lastName" className="delivery-visuallyHidden">
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="delivery-name-input"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="delivery-formGroup">
                <label htmlFor="email" className="delivery-visuallyHidden">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="delivery-input"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="delivery-formGroup">
                <label htmlFor="address" className="delivery-visuallyHidden">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    className="delivery-input"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="locationGroup">
                <div className="delivery-formGroup">
                    <label htmlFor="postcode" className="delivery-visuallyHidden">
                        Postcode
                    </label>
                    <input
                        type="text"
                        id="postcode"
                        className="delivery-input"
                        placeholder="Postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="delivery-formGroup">
                    <label htmlFor="city" className="delivery-visuallyHidden">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        className="delivery-input"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="delivery-formGroup">
                    <label htmlFor="state" className="delivery-visuallyHidden">
                        State
                    </label>
                    <select 
                        id="state" 
                        className="delivery-stateSelect" 
                        value={formData.state}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select State</option>
                        {MALAYSIAN_STATES.map(state => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="delivery-formGroup">
                <label htmlFor="phone" className="delivery-visuallyHidden">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    className="delivery-input"
                    placeholder="Phone +60"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="delivery-checkboxGroup">
                <input
                    type="checkbox"
                    id="saveInfo"
                    className="delivery-checkbox"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                />
                <label htmlFor="saveInfo" className="delivery-checkboxLabel">
                    Save this information for next time
                </label>
            </div>
            <button type="submit" className="delivery-submit-button">
                Save Delivery Info
            </button>
        </form>
    );
};

export default Delivery;  