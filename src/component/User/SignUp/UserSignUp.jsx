import React, { useState } from 'react';
import './UserSignUp.css'
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';
import { useNavigate } from 'react-router-dom';

const UserSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  const goToProfile =() => {
    navigate('/Account');
  }

  return (
    <div className="pageContainer">
      <NavigationBar />
    <form 
      className="accountForm"
      onSubmit={handleSubmit}
      aria-labelledby="createAccountTitle"
    >
      <h1 id="createAccountTitle" className="formTitle">
        Create account
      </h1>
      
      <div className="inputGroup">
        <label htmlFor="firstName" className="visuallyHidden">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="formInput"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="lastName" className="visuallyHidden">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="formInput"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="email" className="visuallyHidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="formInput"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="password" className="visuallyHidden">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="formInput"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <button 
        type="submit"
        className="submitButton"
        aria-label="Create account"
        onClick={goToProfile}
      >
        Create
      </button>
    </form>
    <Footer />
    </div>
  );
}

export default UserSignUp