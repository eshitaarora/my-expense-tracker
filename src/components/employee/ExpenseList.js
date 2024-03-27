// https://dummyjson.com/expenses?limit=10&skip=0

import { useState, useEffect } from "react";
import { getAllExpenses } from "../services/DataService";
import { Link } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";
import "./ExpenseList.css";
import { getExpenseById, delExpense } from "../services/DataService";

const ExpenseList = () => {
<<<<<<< HEAD
  const [expenses, setExpenses] = useState("");

=======
  const [expenses, setExpense] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredExpenses, setFilteredExpenses]=useState(expenses);
  console.log(expenses)
  const handleSearch=(searchTerm)=>{
    const filtered=filteredExpenses.filter((expense)=>expense.title.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(filtered)
    setFilteredExpenses(filtered)
  }
  const handleType=(filteredList)=>{
      setFilteredExpenses(filteredList)
  }
  const handleData=(newStartDate, newEndDate)=>{
    setStartDate(newStartDate);
    setEndDate(newEndDate)
    if(filteredExpenses){
      const filtered=filteredExpenses.filter((expense)=>expense.DateOfRequest>=startDate&&expense.DateOfRequest<=endDate)
      console.log(filtered)
      setFilteredExpenses(filtered)
    }
  } 
>>>>>>> 79389c637a0d0376c1c2ae3d35830210b7b5b7b2
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
<<<<<<< HEAD
          <h2>
            <title>Expense Details</title>
          </h2>
=======
        <div>
        <SearchBar expenses={expenses} onSearch={handleSearch} onStateChange={handleData} onChangeType={handleType}/>
      </div>
          <h2><title>Expense Details</title></h2>
>>>>>>> 79389c637a0d0376c1c2ae3d35830210b7b5b7b2
        </>
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
