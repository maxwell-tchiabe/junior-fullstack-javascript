import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState("");

    const fetchData = (value: any) => {
      fetch("http://localhost:5003/api/cities")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((city: any) => {
            return (
              value &&
              city &&
              city.cityname &&
              city.cityname.toLowerCase().includes(value)
            );
          });
          console.log(results);
        });
    };
  
    const handleChange = (value: any) => {
      setInput(value);
      fetchData(value);
    };
  

 
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};