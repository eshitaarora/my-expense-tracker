import Navbar from "./../Navbar";
import { addExpense } from "../../components/services/DataService";
import { useState } from "react";
import Layout from "../../components/Layout";
import "./Expense.css";
import Footer from "./../Footer";

const Expense = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [dateOfRequest, setDateOfRequest] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerId, setManagerId] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseDetails = {
      employeeId,
      dateOfRequest,
      expenseType,
      expenseDescription,
      amount,
      status,
      managerName,
      managerId,
    };
    addExpense(expenseDetails)
      // .then((response) => response.json())
      .then((data) => {
        console.log("Value stored successfully!", data);
        window.location.href = "/expenselist";
        // Handle any further actions after successful storage
      })
      .catch((error) => {
        alert("Enter Valid Details");
        console.error("Error storing value:", error);
        // Handle error case
      });
  };
  console.log(expenseDescription);

  return (
    <>
      <navbar></navbar>
      <Layout>
        <div className="row justify-content-md-center">
          <h2>Add Expenses</h2>
          <form>
            <ul>
              <label className="id" id="id">
                EmployeeId
              </label>
              <> </>
              <input
                type="number"
                className="id"
                id="id"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              ></input>
            </ul>

            <ul>
              <label for="datetime" className="date" id="date">
                DateOfRequest
              </label>
              <> </>
              <input
                type="datetime-local"
                className="date"
                id="date"
                value={dateOfRequest}
                onChange={(e) => setDateOfRequest(e.target.value)}
              ></input>
            </ul>

            <ul>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="Type">ExpenseType</label>
                  <select
                    value={expenseType}
                    onChange={(e) => setExpenseType(e.target.value)}
                  >
                    <option>ChooseType</option>
                    <option>Travel</option>
                    <option>Food</option>
                    <option>Health/Medical</option>
                    <option>Accessories</option>
                    <option>Miscellanious</option>
                  </select>
                </div>
              </div>
            </ul>

            <ul>
              <label>ExpenseDescription</label>
              <> </>
              <input
                type="text"
                // className="desc"
                // id="desc"
                value={expenseDescription}
                onChange={(e) => setExpenseDescription(e.target.value)}
              ></input>
            </ul>

            <ul hidden>
              <label className="desc" id="desc" hidden>
                Status
              </label>
              <> </>
              <input
                type="text"
                className="desc"
                id="desc"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                hidden
              ></input>
            </ul>

            <ul>
              <label className="amt" id="amt">
                Amount
              </label>
              <> </>
              <input
                type="number"
                className="amt"
                id="amt"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </ul>

            <ul>
              <label className="man" id="man">
                ManagerName
              </label>
              <> </>
              <input
                type="text"
                className="man"
                id="man"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
              ></input>
            </ul>
            <ul>
              <label className="man" id="man">
                ManagerId
              </label>
              <> </>
              <input
                type="text"
                className="man"
                id="man"
                value={managerId}
                onChange={(e) => setManagerId(e.target.value)}
              ></input>
            </ul>

            <button
              style={{
                backgroundColor: "#41913a",
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
      <Footer></Footer>
    </>
  );
};

export default Expense;

/*import React, { useState } from "react";
import Navbar from "./../Navbar";
import { addExpense } from "../../components/services/DataService";
import Layout from "../../components/Layout";
import Footer from "./../Footer";
 
const Expense = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [dateOfRequest, setDateOfRequest] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerId, setManagerId] = useState("");
  const [status, setStatus] = useState("Pending");
 
  const [employeeIdError, setEmployeeIdError] = useState("");
  const [dateOfRequestError, setDateOfRequestError] = useState("");
  const [expenseTypeError, setExpenseTypeError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Validate employeeId
    if (employeeId === "") {
      setEmployeeIdError("EmployeeId is required");
      return;
    }
 
    // Validate dateOfRequest
    if (dateOfRequest === "") {
      setDateOfRequestError("DateOfRequest is required");
      return;
    }
 
    // Validate expenseType
    if (expenseType === "") {
      setExpenseTypeError("ExpenseType is required");
      return;
    }
 
    const expenseDetails = {
      employeeId,
      dateOfRequest,
      expenseType,
      expenseDescription,
      amount,
      status,
      managerName,
      managerId,
    };
 
    addExpense(expenseDetails)
      .then((data) => {
        console.log("Value stored successfully!", data);
        window.location.href = "/expenselist";
      })
      .catch((error) => {
        console.error("Error storing value:", error);
      });
  };
 
  return (
    <>
      <Navbar />
      <Layout>
        <div className="row justify-content-md-center">
          <h2>Add Expenses</h2>
          <form>
            <ul>
              <label className="id" id="id">
                EmployeeId
              </label>
              <> </>
              <input
                type="number"
                className="id"
                id="id"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              ></input>
              {employeeIdError && <p className="error">{employeeIdError}</p>}
            </ul>
 
            <ul>
              <label htmlFor="datetime" className="date" id="date">
                DateOfRequest
              </label>
              <> </>
              <input
                type="datetime-local"
                className="date"
                id="date"
                value={dateOfRequest}
                onChange={(e) => setDateOfRequest(e.target.value)}
              ></input>
              {dateOfRequestError && (
                <p className="error">{dateOfRequestError}</p>
              )}
            </ul>
 
            <ul>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="Type">ExpenseType</label>
                  <select
                    value={expenseType}
                    onChange={(e) => setExpenseType(e.target.value)}
                  >
                    <option value="">ChooseType</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Health/Medical">Health/Medical</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Miscellanious">Miscellanious</option>
                  </select>
                  {expenseTypeError && <p className="error">{expenseTypeError}</p>}
                </div>
              </div>
            </ul>
 
        
 
            <button
              style={{
                backgroundColor: "#41913a",
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
      <Footer />
    </>
  );
};
 
export default Expense; */
