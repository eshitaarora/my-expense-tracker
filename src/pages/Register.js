import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
const API_URL = process.env.REACT_APP_API_URL;

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [projectname, setProjectName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Layout>
      <div className="row justify-content-md-center mt-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Register</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter Name"
                  />
                  {validationErrors.name != undefined && (
                    <div className="flex flex-col">
                      <small className="text-danger">
                        {validationErrors.name[0]}
                      </small>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    type="designation"
                    className="form-control"
                    id="designation"
                    name="designation"
                    value={designation}
                    onChange={(e) => {
                      setDesignation(e.target.value);
                    }}
                    placeholder="Enter Designation"
                  />
                  {validationErrors.designation != undefined && (
                    <div className="flex flex-col">
                      <small className="text-danger">
                        {validationErrors.designation[0]}
                      </small>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="projectname" className="form-label">
                    Project Name
                  </label>
                  <input
                    type="projectname"
                    className="form-control"
                    id="projectname"
                    name="projectname"
                    value={projectname}
                    onChange={(e) => {
                      setProjectName(e.target.value);
                    }}
                    placeholder="Enter Project Name"
                  />
                  {validationErrors.projectname != undefined && (
                    <div className="flex flex-col">
                      <small className="text-danger">
                        {validationErrors.projectname[0]}
                      </small>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  {validationErrors.password != undefined && (
                    <div className="flex flex-col">
                      <small className="text-danger">
                        {validationErrors.password[0]}
                      </small>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm_password"
                    name="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
