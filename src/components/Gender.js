import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Gender.css';
import ProgressBar from "./ProgressBar";

 export default function Gender(){ 
  const navigate = useNavigate()
      
  const[gender, setGender]=useState();
  
  const testData = [
    { bgcolor: "#6a1b9a", completed: 0.0 },
    ];
    return(
      
        <div>
        {testData.map((item, idx) => (
      <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
    ))}
            <div className="text--gender">
                <h2>Select Your Gender</h2>
                Gender is important for form. 
            </div>
            
            <div className="col offset-2">
            <h1 className="col-12 offset-4">{gender}</h1>
            <label className="col-3 offset-2">
              <input type="radio" name="gender" value="Male"  onChange={e=>setGender(e.target.value)}/>Male
              <img  src="https://i.ibb.co/r6mpKBL/Male.png" width="150" height="170"  />
            </label>
            <label className="col-5">
              <input type="radio" name="gender" value="Female"  onChange={e=>setGender(e.target.value)}/>Female
              <img src="https://i.ibb.co/Svmt803/Female.png" width="150" height="170" />
            </label> 

            </div> 
            <div className="row">
                <button onClick={() => navigate('/Date')} className="btn btn-primary col-sm-2 offset-sm-5">Continue</button>
            </div>
        </div>
    );

    }

