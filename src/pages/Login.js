import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./Login.css";

const API_URL = process.env.REACT_APP_API_URL;

function Login() {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") != "" &&
      localStorage.getItem("token") != null
    ) {
      // navigate("/dashboard");
    }
    console.log(localStorage.getItem("token"));
  }, []);

  const loginAction = (e) => {
    console.log(`${API_URL}`);
    setValidationErrors({});
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      id: id,
      password: password,
    };
    axios
      .post(`${API_URL}auth/signin`, payload)
      .then((r) => {
        setIsSubmitting(false);
        localStorage.setItem("token", r.data.token);
        // navigate("/dashboard");
      })
      .catch((e) => {
        setIsSubmitting(false);
        if (e.response.data.errors != undefined) {
          setValidationErrors(e.response.data.errors);
        }
        if (e.response.data.error != undefined) {
          setValidationErrors(e.response.data.error);
        }
      });
  };

  return (
    <Layout>
      <div className="row justify-content-md-center mt-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Sign In</h5>
              <form
                onSubmit={(e) => {
                  loginAction(e);
                }}
              >
                {Object.keys(validationErrors).length != 0 && (
                  <p className="text-center ">
                    <small className="text-danger">
                      Incorrect ID or Password
                    </small>
                  </p>
                )}

                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Employee ID
                  </label>
                  <input
                    type="id"
                    className="form-control"
                    id="id"
                    name="id"
                    value={id}
                    onChange={(e) => {
                      setID(e.target.value);
                    }}
                    placeholder="Enter Employee ID"
                  />
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Login
                  </button>
                  <p className="text-center">
                    Don't have account?{" "}
                    <Link to="/register">Register here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
