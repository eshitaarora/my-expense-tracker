import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./../Footer";
import ExpenseChart from "./ExpenseTable";
import { Link } from "react-router-dom";
import "./ManHome.css";
import Navbar from "../Navbar";

function ManHome() {
  return (
    <>
    <div className="contain1">
      <Navbar />
      <div className="container mt-5">
        <h2>Welcome to Expense Tracker Platform</h2>
        <button className="button10"><Link className="link" to="/ExpenseTable" style={{textDecoration:'none', color: 'white'}}>
          Manager Expenses
        </Link></button>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ManHome;
