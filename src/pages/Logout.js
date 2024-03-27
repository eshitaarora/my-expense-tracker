import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import Navbar from './Navbar'
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove authentication token from storage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <>
      <Navbar></Navbar>
      <div> hi</div>
      <div className="container mt-5">
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button className="btn btn-primary" onClick={handleLogout}>Yes</button>
        <button className="btn btn-secondary" onClick={() => navigate('/home')}>No</button>
      </div>
    </>
    
  );
}

export default Logout;
