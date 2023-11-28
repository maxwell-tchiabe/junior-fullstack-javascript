
import React, { useState, ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";

import "./create.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
 
interface City {
    cityname?: string;
    citycount?: number;
    cityid?: unknown
  }
 const Edit= () => {
    const [values, setValues]= useState({
        cityName: '',
        cityCount: ''
      })
      const {id} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:5003/api/cities/${id}`)
          .then(res => {
            console.log(res.data[0]);
            setValues({...values, cityName:res.data[0].cityname, cityCount: res.data[0].citycount});
          })
          .catch(err => console.log(err));
      }, [id]);
      const navigate = useNavigate();
      const handleEdit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.put(`http://localhost:5003/api/cities/${id}`, values)
        .then(res => {
          console.log(res)
          navigate('/')
        })
        .catch(err => console.log(err))
      }
     
  return (
    <div className="results-list">
      <form onSubmit={handleEdit}>
          <h2> Update city</h2>
          <div>
          <label htmlFor="">city</label>
          <input type="text" placeholder="enter city"  value={values.cityName}
          onChange={e => setValues({...values, cityName: e.target.value})}/>
          </div>

          <div>
          <label htmlFor="">count</label>
          <input type="text" placeholder="enter count"  value={values.cityCount}
          onChange={e => setValues({...values, cityCount: e.target.value})}/>
          </div>
          
          <button className="button">submit</button>
        </form>
    </div>
  );
};

export default Edit;