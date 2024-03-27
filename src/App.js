import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Logout from "./pages/Logout";
import Footer from "./pages/Footer";
import Expense from "./pages/Employee/Expense";
import ExpenseChart from "./pages/Manager/ExpenseTable";
import ManHome from "./pages/Manager/ManHome";
import ExpenseList from "./components/employee/ExpenseList";
import Page404 from "./pages/Page404";
import ExpenseTable from "./pages/Manager/ExpenseTable";
import SearchBar from "./pages/Employee/SearchBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/managerhome" element={<ManHome />} />
        <Route path="/expenselist" element={<ExpenseList />} />
        <Route path="/expensetable" element={<ExpenseTable />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
