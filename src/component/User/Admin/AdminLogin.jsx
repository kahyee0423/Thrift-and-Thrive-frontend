import React from 'react'
import './AdminLogin.css'
import Footer from '../../Footer/footer'
import NavigationBar from '../../NavigationBar/NavigationBar'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  const navigate = useNavigate();
  const goToAdminPanel = () => {
    navigate('/AdminPanel');
  }

  return (
    <div className="pageContainer">
    <NavigationBar />
    
    <main className="mainContent" role="main">
    <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
    <h2 className="formTitle">Admin Login</h2>
    <div className="inputGroup">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input
              type="email"
              id="email"
              className="formInput"
              placeholder="Email"
              required
              aria-required="true"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password" className="visually-hidden">Password</label>
            <input
              type="password"
              id="password"
              className="formInput"
              placeholder="Password"
              required
              aria-required="true"
            />
          </div>
          <button type="submit" className="admin-submitButton" onClick={goToAdminPanel}>Sign in</button>
          </form>
    </main>
    <Footer />
    </div>
  )
}

export default AdminLogin;