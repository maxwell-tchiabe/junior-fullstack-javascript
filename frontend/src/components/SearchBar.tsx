import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa";
import { BsFillTrashFill,BsFillPencilFill,BsFillFileFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SearchBar.css";

interface City {
  cityname: string;
  citycount: number;
  cityid: unknown
}

const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<City[]>([]);

  const handleDelete = (id: any) => {
    axios.delete(`http://localhost:5003/api/cities/${id}`)
    .then(res => {
      location.reload();
      
    })
    .catch(err => console.log(err))
  }

  const columns = [
    {
      name: 'City',
      selector: (row: City) => row.cityname,
    },
    {
      name: 'Count',
      selector: (row: City) => row.citycount,
    },
    {
    name: "Action",
    cell: (row: City) => (
      <div className="actions">
          <Link to={`/read/${row.cityid}`}>
             <MdRemoveRedEye className="view-btn" />
          </Link>
          <Link to={`/edit/${row.cityid}`}>
             <BsFillPencilFill className="view-btn" />
          </Link>
          <button onClick={() => handleDelete(row.cityid)} >
             <BsFillTrashFill   />
          </button>
      </div>
    ),
    },
  ];

  useEffect(() => {
    fetchData(input);
  }, [input]);

  const fetchData = (value: string) => {
    fetch("http://localhost:5003/api/cities")
      .then((response) => response.json())
      .then((json: City[]) => {
        const results = json.filter((city) =>
          city.cityname.toLowerCase().includes(value.toLowerCase())
        );
        console.log(results);
        setData(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <div >
        <div className="input-wrapper">
        
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
        </div>
      

      <div className="results-list">
        <DataTable columns={columns} data={data} pagination />
      </div>

      <div>
        <Link to="/create" className="delete-btn">
          <button className="button">create</button></Link>
      </div>
    </div>
  );
};

export default SearchBar;
