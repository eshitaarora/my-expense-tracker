import { useState, useEffect } from "react";
import { getAllExpenses } from "../../components/services/DataService";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./ExpenseList.css";
import {
  getExpenseById,
  delExpense,
} from "../../components/services/DataService";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState("");
  const [status, setStatus] = useState("Pending");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let userId = localStorage.getItem("employeeId");
    console.log(userId);
    getExpenseById(userId)
      .then((response) => {
        console.log(response.data);
        setExpenses(response.data);
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

    return expenses.filter(
      (expense) =>
        expense.expenseType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.expenseId.toString().includes(searchTerm)
    );
  };
  const filteredExpenses = getFilteredExpense();

  const redirectToNewExpense = () => {
    window.location.href = "/expense";
  };
  const handleUpdate = (expenseId) => {
    window.location.href = `/UpdateExpense/${expenseId}`;
  };
  const handleDelete = async (expenseId) => {
    try {
      await delExpense(expenseId);
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.expenseId != expenseId)
      );
    } catch (error) {
      console.log("Error deleting expense:", error);
    }
  };

  return (
    <>
      <Navbar />

      <button onClick={redirectToNewExpense}>Add New Expense</button>

      <div>
        <input
          type="text"
          placeholder="Search by Expense Type or Id"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <>
          <h2>EXPENSE DETAILS</h2>
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
                  Expense Id
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Date Of Request
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Expense Type
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Expense Desciption
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
                  Manager Name
                </th>
                <th
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log(expenses)}
              {filteredExpenses &&
                filteredExpenses.map((user) => (
                  <tr key={user.expenseId}>
                    <td>{user.expenseId}</td>
                    <td>{user.dateOfRequest}</td>
                    <td>{user.expenseType}</td>
                    <td>{user.expenseDescription}</td>
                    <td>{user.status}</td>
                    <td>{user.amount}</td>
                    <td>{user.managerName}</td>
                    <td>
                      <button onClick={() => handleUpdate(user.expenseId)}>
                        Update
                      </button>
                      <button onClick={() => handleDelete(user.expenseId)}>
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
