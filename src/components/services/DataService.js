import axios from "axios";

const expenseUrl = "http://localhost:64125/api/tblexpenses";

// axios syntax
// axios.get('url')
// .then((resp) => { handle response})
// .catch((err) => { handle error});

const getAllExpenses = () => {
  console.log("getAllExpense");
  return axios.get(`${expenseUrl}`);
};

// const getProductsWithPagination = (limit, skip) => {
//   console.log(limit, skip);
//   return axios.get(`${productUrl}?limit=${limit}&skip=${skip}`);
// };

const getExpenseById = (employeeId) => {
  console.log(employeeId);
  return axios.get(`${expenseUrl}/${employeeId}`);
};

const addExpense = (expenseDetails) => {
  return axios.post(expenseUrl, expenseDetails);
};

const delExpense = (expenseid) => {
  return axios.delete(`${expenseUrl}/${expenseid}`);
};

const editExpense = (expenseid) => {
  return axios.put(`${expenseUrl}/${expenseid}`);
};
// more functions

export {
  getAllExpenses,
  delExpense,
  // getProductsWithPagination,
  editExpense,
  getExpenseById,
  addExpense,
};

// // option 1 to export multiple functions

// const getAllProducts = () => { };

// const getProductById = () => { };

// const addProduct = () => { };

// // more functions

// export { getAllProducts, getProductById, addProduct };

// // // option 2 to export multiple functions

// // export const getAllProducts = () => { };

// // export const getProductById = () => { };

// // export const addProduct = () => { };

// // // more functions
