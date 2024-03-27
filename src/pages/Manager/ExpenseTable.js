
import { useState, useEffect } from "react";
import { getAllExpenses } from "../../components/services/DataService";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./ExpenseTable.css";

const ExpenseTable = () => {
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
    <>
      <Navbar />
      <div>
        <>
          <h2><title>Expense Details of Employees</title></h2>
        </>
        <>
          <h2>EMPLOYEE EXPENSE DETAILS</h2>

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
              <tr>
                <td
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  2{" "}
                </td>
                <td
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  3{" "}
                </td>
                <td
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  03/27/2024{" "}
                </td>
                <td
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Travel{" "}
                </td>
                {/* <td
                  style={{
                    border: "solid thin",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  travel{" "}
                </td> */}
                <td
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  vacation{" "}
                </td>
                <td
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  20,000{" "}
                </td>
                {/* <td
                  style={{
                    border: "solid thin",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Snigdha{" "}
                </td> */}
                <td
                  style={{
                    border: "solid thin",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://th.bing.com/th/id/R.dcb2e4870b8433e803036b03143cbc43?rik=zrHg6%2fqXhjiNYA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdc7%2f6q7%2fdc76q7zoi.png&ehk=1JM%2bqPKp%2fHi69745qSMYup0llhtStkOC7xmU75j7O2s%3d&risl=1&pid=ImgRaw&r=0"
                  ></img>
                  <br /> <br />
                  <img
                    width="25"
                    height="25"
                    src="https://th.bing.com/th/id/R.e88bb40ecefdbd2d2f9a02944e23e687?rik=egJSj%2bSgNwIo%2bw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cR%2fLbg%2f9cRLbgE7i.png&ehk=um2l3QR5q%2bY4Ii8W05U1Ly%2f%2bmY5QrVU8ZFS1fmzOXlc%3d&risl=&pid=ImgRaw&r=0"
                  ></img>
                  <br /> <br />
                </td>
              </tr>
            </tbody>
            {/* <tbody>
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
                    <button>Update</button>
                    <button>Delete</button>
                  </td>
                 
                </tr>
              ))}
          </tbody> */}
          </table>
        </>
      </div>
      <Footer />
    </>
  );
};
export default ExpenseTable;
