import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        marginBottom: "20px",
        width: "100%",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    />
  );
};

export default SearchBar;
