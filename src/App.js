import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home';
import Navbar from './pages/Navbar';
<<<<<<< HEAD
import Expense from './pages/Client/Expense'
 
=======
import About from './pages/About';
import Logout from './pages/Logout';
import Footer from './pages/Footer';

>>>>>>> 3b5de938f0b524007816917cf49138ce2b37d8cc
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
          <Route path="/home"  element={<Home/>} />
          <Route path="/navbar"  element={<Navbar/>} />
<<<<<<< HEAD
          <Route path="/expense" element={<Expense />} />
=======
          <Route path="/about"  element={<About/>} />
          <Route path="/logout"  element={<Logout/>} />
          <Route path="/footer"  element={<Footer/>} />
>>>>>>> 3b5de938f0b524007816917cf49138ce2b37d8cc
      </Routes>
    </Router>
  );
}
  
export default App;