// https://dummyjson.com/expenses?limit=10&skip=0

import { useState, useEffect } from "react";
import { getAllExpenses } from "../services/DataService";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

// import { setProductListObj } from "./redux/ProductSlice";

const ExpenseList = () => {
  const [expenses, setExpense] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredProducts, setFilteredProducts]=useState(expenses.products);
  const handleSearch=(searchTerm)=>{
    const filtered=filteredProducts.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(filtered)
    setFilteredProducts(filtered)
  }
  const handleType=(filteredList)=>{
      setFilteredProducts(filteredList)
  }
  const handleData=(newStartDate, newEndDate)=>{
    setStartDate(newStartDate);
    setEndDate(newEndDate)
    if(filteredProducts){
      const filtered=filteredProducts.filter((product)=>product.price>=startDate&&product.price<=endDate)
      console.log(filtered)
      setFilteredProducts(filtered)
    }
  } 
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
      <div>
        <SearchBar products={expenses.products} onSearch={handleSearch} onStateChange={handleData} onChangeType={handleType}/>
      </div>
        <title>Expense Details</title>
      </>
      <>
        <h3>EXPENSE DETAILS</h3>
        <table align="center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts && filteredProducts.map((user) => (
                <tr key={user.id}>
                  <td>{user.title}</td>
                  <td>{user.description}</td>
                  <td>{user.price}</td>
                  <td>{user.brand}</td>
                  <td>{user.category}</td>
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
