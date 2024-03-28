import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div className="navbar-brand1" to="/">
          Expense Tracker
        </div>
        <img src={require('../assets/expense4.jpg')} alt="Expense Tracker" className="expense-image" />
        <img src={require('../assets/expense2.jpg')} alt="Expense Tracker" className="expense-image1" />
        <img src={require('../assets/expense1.jpg')} alt="Expense Tracker" className="expense-image2" />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
