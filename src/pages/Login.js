import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import "./Login.css";
import ExpenseList from "../components/employee/ExpenseList";

const Login = () => {
  const [credentials, setCredentials] = useState({
    employeeId: "",
    password: "",
  });
  const [id, setId] = useState(null);

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

      const { id } = response.data;
      console.log(id);
      setId(id);

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
    <div>
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
      <>{id && <ExpenseList id={id} />}</>
    </div>
  );
};

export default Login;
