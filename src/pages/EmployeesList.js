// https://dummyjson.com/expenses?limit=10&skip=0

import { useState, useEffect } from "react";
import { getAllEmployees } from "../components/services/EmployeeDataService";
import { Link } from "react-router-dom";

// import { setProductListObj } from "./redux/ProductSlice";

const ExpenseList = () => {
  const [employee, setEmployee] = useState("");

  useEffect(() => {
    getAllEmployees()
      .then((response) => {
        console.log(response.data);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <>
        <title>Employee Details</title>
      </>
      <>
        <h3>EMPLOYEE DETAILS</h3>
        <table align="center">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {console.log(employee)}
            {employee &&
              employee.map((user) => (
                <tr key={user.employeeId}>
                  <td>{user.employeeId}</td>
                  <td>{user.employeeName}</td>
                  <td>{user.designation}</td>
                  <td>{user.project}</td>
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
