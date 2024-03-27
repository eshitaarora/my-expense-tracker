import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ExpenseList from "./components/employee/ExpenseList";
import Expense from "./pages/Client/Expense";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/expenselist" element={<ExpenseList />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  );
}

export default App;
