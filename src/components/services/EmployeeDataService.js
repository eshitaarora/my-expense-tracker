import axios from "axios";

const employeeUrl = "http://localhost:64125/api/tblemployees";

const getAllEmployees = () => {
  console.log("getAllEmployess");
  return axios.get(`${employeeUrl}`);
};

const addEmployee = (newEmployee) => {
  console.log(newEmployee);
  return axios.post(employeeUrl, newEmployee);
};

// more functions

export { getAllEmployees, addEmployee };
