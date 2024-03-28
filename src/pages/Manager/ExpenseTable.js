import { useState, useEffect } from "react";
import {
  getAllExpenses,
  getExpenseById,
} from "../../components/services/DataService";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./ExpenseTable.css";
import { getExpenses } from "../../components/services/DataService";
import axios from "axios";

const ExpenseTable = () => {
  const [expenses, setExpense] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusUpdates, setStatusUpdates] = useState({});

  const handleStatusChange = (expenseId, newStatus) => {
    setStatusUpdates((prevStatusUpdates) => ({
      ...prevStatusUpdates,
      [expenseId]: newStatus,
    }));
    axios
      .post("http://localhost:64125/api/TblExpenses/UpdateStatus", {
        expenseId,
        status: newStatus,
      })
      .then((response) => {
        console.log("Status updated successfully");
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  useEffect(() => {
    let userId = localStorage.getItem("employeeId");
    getExpenses(userId)
      .then((response) => {
        console.log(response.data);
        setExpense(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getFilteredExpense = () => {
    if (!searchTerm) return expenses;

    return expenses.filter((expense) => {
      const term = searchTerm.toLowerCase();
      const dateMatches = expense.dateOfRequest.includes(term);
      const idMatches = expense.expenseId.toString().includes(term);

      return dateMatches || idMatches;
    });
  };
  const filteredExpenses = getFilteredExpense();

  return (
    <>
      <Navbar />
      <div>
        <div>
          <input
            type="text"
            placeholder="Search by Expense Type or Id"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <>
          <h2>EMPLOYEE EXPENSE DETAILS</h2>

          <table
            border="2"
            width="500"
            cellSpacing="5"
            cellPadding="25"
            align="center"
          >
            <thead>
              <tr
                style={{
                  border: "solid thin",
                  color: "black",
                  textAlign: "center",
                }}
              >
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                  border="2"
                >
                  ExpenseId
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                  border="2"
                >
                  EmployeeId
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  dateOfRequest
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  ExpenseType
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  expenseDesciption
                </th>
                {/* <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Status
                </th> */}
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Amount
                </th>
                {/* <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  ManagerName
                </th> */}
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log(expenses)}
              {filteredExpenses &&
                filteredExpenses.map((user) => (
                  <tr key={user.expenseId}>
                    <td>{user.expenseId}</td>
                    <td>{user.employeeId}</td>
                    <td>{user.dateOfRequest}</td>
                    <td>{user.expenseType}</td>
                    <td>{user.expenseDescription}</td>
                    <td>{user.amount}</td>
                    <td>
                      <select
                        value={statusUpdates[expenses.expenseId] || user.status}
                        onChange={(e) =>
                          handleStatusChange(user.expenseId, e.target.value)
                        }
                      >
                        <option>ChooseType</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                        <option>Pending</option>
                      </select>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      </div>
      <Footer />
    </>
  );
};
export default ExpenseTable;
