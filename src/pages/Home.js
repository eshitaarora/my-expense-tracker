import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <h1>Welcome Home!</h1>
        <p>Welcome to Expense Tracker Platform</p>
      </div>
    </>
  );
}

export default Home;
