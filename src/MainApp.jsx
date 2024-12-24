import React from 'react'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';

const MainApp = () => (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
  
  export default MainApp;