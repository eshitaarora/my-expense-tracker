import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='contain'>
      <div className="container mt-5">
        <div className="navbar-brand1" to="/">
          Expense Tracker
        </div>
        <img src={require('../assets/image.png')} alt="Expense Tracker" className="expense-image" />
      </div>
      <button className="button2"><Link className="link" to="/expenselist" style={{textDecoration:'none', color: 'white'}}>
          Employee Expenses
        </Link></button>
        </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
