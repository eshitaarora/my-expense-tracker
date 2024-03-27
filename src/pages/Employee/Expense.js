import Navbar from "./../Navbar";
import Footer from "./../Footer";
import { addExpense } from "../../components/services/DataService";
import { useState } from "react";
import Layout from "../../components/Layout";

const Expense = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [dateOfRequest, setDateOfRequest] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerId, setManagerId] = useState("");
  const [status, setStatus] = useState("");
  const [expenseId, setExpenseId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseDetails = {
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
        // Handle any further actions after successful storage
      })
      .catch((error) => {
        console.error("Error storing value:", error);
        // Handle error case
      });
  };

  return (
    <>
      <Layout>
        <div className="row justify-content-md-center">
          <h1>Add expenses</h1>
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
                  <select>
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
              <label className="desc" id="desc">
                ExpenseDescription
              </label>
              <> </>
              <input
                type="text"
                className="desc"
                id="desc"
                value={expenseDescription}
                onChange={(e) => setExpenseDescription(e.target.value)}
              ></input>
            </ul>

            <ul>
              <label className="desc" id="desc">
                Status
              </label>
              <> </>
              <input
                type="text"
                className="desc"
                id="desc"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
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

export default Expense;
