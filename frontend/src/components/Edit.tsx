
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
    const {id} = useParams();
    const [city, setCity]= useState<City[]>([])
    useEffect(() => {
        axios.get(`http://localhost:5003/api/cities/${id}`)
          .then(res => {
            console.log(res.data[0]);
            setCity(res.data);
          })
          .catch(err => console.log(err));
      }, [id]);
     
  return (
    <div className="results-list">
       <div className="Edit">
            <div className="p-2">
                <h2>City Detail</h2>
                <h2>City:{city[0].cityname}</h2>
                <h2>Count:{city[0].citycount}</h2>
            </div>
            <Link to="/" className="btn-btn">Back</Link>
       </div>
    </div>
  );
};

export default Edit;