// https://dummyjson.com/expenses?limit=10&skip=0

import { useState, useEffect } from "react";
import { getAllExpenses } from "../services/DataService";
import { Link } from "react-router-dom";

// import { setProductListObj } from "./redux/ProductSlice";

const ExpenseList = () => {
  const [expenses, setExpense] = useState("");

  useEffect(() => {
    getAllExpenses()
      .then((response) => {
        console.log(response.data);
        setExpense(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <>
        <title>Expense Details</title>
      </>
      <>
        <h3>EXPENSE DETAILS</h3>
        <table align="center">
          <thead>
            <tr>
              <th>Expense Id</th>
              <th>Date and Time of Request</th>
              <th>Expense Type</th>
              <th>Expense Description</th>
              <th>Amount</th>
              <th>Manager Name</th>
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
                  {/* <td>
                    <button onClick={() => EditUserDetails()}>Update</button>
                    <FaTrash onClick={() => onDelete(user.id)} />
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </>
    </div>
  );
};
export default ExpenseList;
