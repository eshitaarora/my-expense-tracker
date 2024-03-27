import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ExpenseList from "./components/employee/ExpenseList";
import Expense from "./pages/Employee/Expense";
import EmployeeList from "./pages/EmployeesList";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/expenselist" element={<ExpenseList />} />
        <Route path="/newexpense" element={<Expense />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
