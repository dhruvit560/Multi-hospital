import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/css/style.css';
import React from 'react';
import HeaderMain from './component/Header';
import Footer from './component/Footer';
import HomePage from './component/HomePage';

function App() {
  return (
    <>
      <HeaderMain/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
