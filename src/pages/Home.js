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
      <div className="navbar-brand" to="/">Expense Tracker</div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
