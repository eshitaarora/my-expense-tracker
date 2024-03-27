import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './../Navbar';
import Footer from './../Footer';
import ExpenseChart from './ExpenseChart';
import { Link } from 'react-router-dom';
import './ManHome.css';

function ManHome() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <p>Welcome to Expense Tracker Platform</p>
        <Link  className="link" to="/ExpenseChart">Employee Expenses</Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ManHome;