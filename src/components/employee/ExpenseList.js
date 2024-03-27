import { useState, useEffect } from "react";
import { getAllExpenses } from "../../components/services/DataService";
import { Link } from "react-router-dom";
import Navbar from "C:/Users/esarora/Desktop/my-expense-tracker/src/pages/Navbar.js";
import Footer from "C:/Users/esarora/Desktop/my-expense-tracker/src/pages/Footer.js";
import "./ExpenseList.css";
import {
  getExpenseById,
  delExpense,
} from "../../components/services/DataService";
 
const ExpenseList = () => {
  const [expenses, setExpenses] = useState("");
 
  useEffect(() => {
    let userId = localStorage.getItem("employeeId");
    getExpenseById(userId)
      .then((response) => {
        console.log(response.data);
        setExpenses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  return (
    <>
      <Navbar />
      <div>
        <>
          <h2>EXPENSE DETAILS</h2>
          <table
            border="2"
            width="500"
            cellspacing="5"
            cellpadding="25"
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
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Amount
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  ManagerName
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log(expenses)}
              {expenses &&
                expenses.map((user) => (
                  <tr key={user.expenseId}>
                    <td>{user.expenseId}</td>
                    <td>{user.dateOfRequest}</td>
                    <td>{user.expenseType}</td>
                    <td>{user.expenseDesciption}</td>
                    <td>{user.status}</td>
                    <td>{user.amount}</td>
                    <td>{user.managerName}</td>
                    <td>
                      {/* <button onClick={() => updateExpense(user.expenseId)}>
                        Update{" "}
                      </button> */}
                      <button onClick={() => delExpense(user.expenseId)}>
                        Delete
                      </button>
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
export default ExpenseList;