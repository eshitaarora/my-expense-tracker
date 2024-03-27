import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarMan from './../Manager/NavbarMan';
import Footer from './../Footer';
import ExpenseChart from './ExpenseChart';
import { Link } from 'react-router-dom';
import './ManHome.css';

function ManHome() {
  return (
    <>
      <NavbarMan></NavbarMan>
      <div className="container mt-5">
        <p>Welcome to Expense Tracker Platform</p>
        <Link  className="link" to="/ExpenseList">Manager Expenses</Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ManHome;