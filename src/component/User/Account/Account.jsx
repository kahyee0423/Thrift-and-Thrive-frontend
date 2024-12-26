import React from 'react'
import './Account.css'
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../../Footer/footer';
import OrderHistory from './OrderHistory/OrderHistory';
import Profile from './Profile/Profile';

const Account = () => {
    return (
        <div className="accountPage">
          <NavigationBar />
          <main className="mainContent">
            <Profile
              username="Smith Rowe"
              email="smithrowe@gmail.com"
            />
            <hr className="account-divider" aria-hidden="true" />
            <OrderHistory />
          </main>
          <Footer />
        </div>
      );
}

export default Account