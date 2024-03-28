import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { addEmployee } from "../components/services/EmployeeDataService";
import "./Register.css";

const Register = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [project, setProject] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      employeeName,
      designation,
      project,
      password,
    };
    addEmployee(newEmployee)
      .then((data) => {
        console.log("Value stored successfully!", data);
        // Handle any further actions after successful storage
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error storing value:", error);
        // Handle error case
      });
  };

  return (
    <>
      <Layout>
        <div className="">
          <h1>Register</h1>
          <form>
            <ul>
              <label className="employeeName" id="id">
                EmployeeName
              </label>
              <> </>
              <input
                type="text"
                className="employeeName"
                id="employeeName"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              ></input>
            </ul>

            <ul>
              <label className="designation" id="designation">
                Designation
              </label>
              <> </>
              <input
                type="text"
                className="designation"
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              ></input>
            </ul>

            <ul>
              <label className="project" id="project">
                Project
              </label>
              <> </>
              <input
                type="text"
                className="project"
                id="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              ></input>
            </ul>

            <ul>
              <label className="password" id="password">
                Password
              </label>
              <> </>
              <input
                type="password"
                className="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </ul>

            <button
              style={{
                backgroundColor: "grey",
                textAlign: "center",
                fontWeight: "bold",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
