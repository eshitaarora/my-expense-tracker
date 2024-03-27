import { useState } from "react";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "./SearchBar.css";

const SearchBar = ({ expenses, onSearch, onStateChange, onChangeType }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedExpenseType, setSelectedExpenseType] = useState();

  const filteredList = expenses && expenses.filter((item) => item.expenseType === selectedExpenseType);

  const handleType = () => {
    onChangeType(filteredList);
  };

  const handleClick = () => {
    onStateChange(startDate, endDate);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title"
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="date-pickers">
          <ReactDatePicker
            selected={startDate}
            value={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select start date"
            className="date-picker"
          />
          <ReactDatePicker
            selected={endDate}
            value={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Select end date"
            className="date-picker"
          />
      <select value={selectedExpenseType} onChange={(e) => setSelectedExpenseType(e.target.value)} className="category-select">
        <option value="">All</option>
        <option value="travel">Travel</option>
        <option value="food">Food</option>
        <option value="health">Health/Medical</option>
        <option value="accessories">Accessories</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>
      <button onClick={handleType} className="type-button">
        Search Type
      </button>
      </div>
        <button onClick={handleClick} className="search-button">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
