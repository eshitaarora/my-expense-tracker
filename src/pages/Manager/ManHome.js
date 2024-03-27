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
      <Navbar />
      <div className="container mt-5">
        <p>Welcome to Expense Tracker Platform</p>
        <Link className="link" to="/ExpenseTable">
          Manager Expenses
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ManHome;
