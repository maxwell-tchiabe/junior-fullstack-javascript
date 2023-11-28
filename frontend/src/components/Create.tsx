
import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

import "./create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  
 const Create= () => {
    const [values, setValues]= useState({
      cityName: '',
      cityCount: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      axios.post('http://localhost:5003/api/cities', values)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err))
    }
  return (
    <div className="results-list">
        <form onSubmit={handleSubmit}>
          <h2> Add city</h2>
          <div>
          <label htmlFor="">city</label>
          <input type="text" placeholder="enter city" 
          onChange={e => setValues({...values, cityName: e.target.value})}/>
          </div>

          <div>
          <label htmlFor="">count</label>
          <input type="text" placeholder="enter count" 
          onChange={e => setValues({...values, cityCount: e.target.value})}/>
          </div>
          
          <button className="button">submit</button>
        </form>
    </div>
  );
};

export default Create;