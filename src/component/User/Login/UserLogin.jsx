import React from 'react'
import './UserLogin.css'
import NavigationBar from '../../NavigationBar/NavigationBar.jsx'
import Footer from '../../Footer/footer.jsx'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  const navigate = useNavigate();

  const goToProfile =() => {
    navigate('/Account');
  }
  return (


    <div className="loginPage">
    <NavigationBar />
    <main className="mainContent">
    <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
      <h2 className="formTitle">Login</h2>
      
      <div className="formGroup">
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

      <div className="formGroup">
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

      <a href="/forgot-password" className="forgotPassword">
        Forgot your password?
      </a>

      <button type="submit" className="submitButton" onClick={goToProfile}>
        Sign in
      </button>

      <a href="/UserSignUp" className="createAccount">
        Create account
      </a>
    </form>
    </main>
    <Footer />
    </div>
  )
}

export default UserLogin