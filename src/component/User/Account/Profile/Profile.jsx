import React from 'react'
import './Profile.css'

const Profile = ({ username, email }) => {
  return (
    <section className="userProfile" aria-label="User profile information">
      <h2 className="sectionTitle">My Account</h2>
      <div className="userInfo">
        <p className="userDetail">Username: {username}</p>
        <p className="userDetail">Email address: {email}</p>
        <button 
          className="signOutButton"
          onClick={() => {/* handle sign out */}}
          aria-label="Sign out of your account"
        >
          <img src="https://cdn.builder.io/api/v1/image/assets/904907665fd04df7b56e80ff4b56e284/b10fea4b197ece1c5e74b9d5002672283372e15888c352d5445fdc9f503f0964?apiKey=904907665fd04df7b56e80ff4b56e284&" alt="" className="signOutIcon" />
          <span>Sign out</span>
        </button>
      </div>
    </section>
  );
}

export default Profile