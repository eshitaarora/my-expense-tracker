import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./Login.css";
 
const Login = () => {
  const [credentials, setCredentials] = useState({
    employeeId: "",
    password: "",
  });
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:64125/api/TblEmployees/${credentials.employeeId}`,
        credentials
      );
      const { designation } = response.data;
      if (designation === "Manager") {
        // Redirect to the admin page
        window.location.href = "/managerHome";
      } else {
        // Redirect to the employee expenses page
        window.location.href = "/expenselist";
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
 

const Login = () => {
  const [credentials, setCredentials] = useState({
    employeeId: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:64125/api/TblEmployees/${credentials.employeeId}`,
        credentials
      );
      const { designation } = response.data;
      if (designation === "Manager") {
        // Redirect to the admin page
        window.location.href = "/managerHome";
      } else {
        // Redirect to the employee expenses page
        window.location.href = "/expenselist";
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="employeeId"
        value={credentials.employeeId}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="employeeId"
        value={credentials.employeeId}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
    </>
  );
};
 
};

export default Login;
