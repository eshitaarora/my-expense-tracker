import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { editExpense } from "../../components/services/DataService";

const UpdateExpense = () => {
  const { expenseId } = useParams();

  const [expense, setExpense] = useState({
    dateOfRequest: "",
    expenseType: "",
    expenseDescription: "",
    status: "",
    amount: "",
    managerName: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:64125/api/TblExpenses/expense/${expenseId}`)
      .then((res) => {
        setExpense(res.data);
        console.log(expenseId);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [expenseId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:64125/api/tblexpenses/${expenseId}`, expense)
      .then(() => {
        alert("Expense Updated!");
        window.location.href = "/expenselist";
      })
      .catch((error) => {
        console.error("There was an error updating", error);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <h3>USER UPDATE FORM</h3>

      <form
        style={{
          width: "500px",
          height: "auto",
          padding: "10px",
          boxSizing: "border-box",
          overflow: "hidden",
          fontWeight: "bolder",
          fontSize: "20px",
        }}
      >
        <ul>
          <label for="datetime" className="date" id="date">
            Date Of Request
          </label>
        </ul>
        <></>
        <input
          type="datetime-local"
          name="dateOfRequest"
          value={expense.dateOfRequest}
          onChange={handleChange}
        />
        <ul>
          <label htmlFor="Type">Expense Type</label>

          <select
            name="expenseType"
            value={expense.expenseType}
            onChange={handleChange}
          >
            <option>ChooseType</option>
            <option>Travel</option>
            <option>Food</option>
            <option>Health/Medical</option>
            <option>Accessories</option>
            <option>Miscellanious</option>
          </select>
        </ul>
        <ul>
          <label>Expense Description</label>
          <> </>
          <input
            name="expenseDescription"
            value={expense.expenseDescription}
            onChange={handleChange}
          />
        </ul>
        <ul hidden>
          <label hidden>Status</label>
          <input
            name="status"
            value={expense.status}
            onChange={handleChange}
            hidden
          />
        </ul>
        <ul>
          <label>Amount</label>
          <> </>
          <input name="amount" value={expense.amount} onChange={handleChange} />
        </ul>
        <ul hidden>
          <label className="man" id="man">
            ManagerName
          </label>
          <> </>
          <input
            name="managerName"
            value={expense.managerName}
            onChange={handleChange}
          />
        </ul>
        <button style={{ backgroundColor: "green" }} onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default UpdateExpense;
