import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useNavigation } from "react-router-dom";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./Login.css";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    employeeId: "",
    password: "",
  });

  // const auth = useAuth();
  const navigate = useNavigate();

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
      // auth.login(response.data);

      const { designation } = response.data;
      localStorage.setItem("employeeId", response.data["id"]);
      if (designation === "Manager") {
        navigate("/managerhome");
        // Redirect to the admin page
        // window.location.href = "/managerhome";
      } else {
        // Redirect to the employee expenses page
        navigate("/expenselist");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <>
      <div className="card1">
                        <div className="card-body"></div>
<form onSubmit={handleFormSubmit}>
<h5 className="card-login">Sign In</h5>
        <label htmlFor="employeeId"><b>EmployeeId</b></label>
        <input
          type="text"
          name="employeeId"
          value={credentials.employeeId}
          onChange={handleInputChange}
          placeholder="Employee ID" // Add placeholder here
        />
        <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          placeholder="Password" // Add placeholder here
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
      <div >
                                    <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
                                </div>
     </div>
    </>
  );
};

export default Login;
