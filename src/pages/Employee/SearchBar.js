import { useState } from "react";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "./SearchBar.css";

const SearchBar = ({ products, onSearch, onStateChange, onChangeType }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();

  const filteredList = products && products.filter((item) => item.category === selectedCategory);

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
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="category-select">
        <option value="">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
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
