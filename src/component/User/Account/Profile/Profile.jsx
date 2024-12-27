import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';

const Profile = ({ username, email }) => {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  }

  return (
    <section className="userProfile" aria-label="User profile information">
      <h2 className="sectionTitle">My Account</h2>
      <div className="userInfo">
        <p className="userDetail">Username: {username}</p>
        <p className="userDetail">Email address: {email}</p>
        <button 
          className="signOutButton"
          onClick={goToHomePage}
          aria-label="Sign out of your account"
        >
          <img src="./asset/logout.png" alt="" className="signOutIcon" />
          <span>Sign out</span>
        </button>
      </div>
    </section>
  );
}

export default Profile