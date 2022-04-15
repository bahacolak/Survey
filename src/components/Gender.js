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
        <div className="gender">
        {testData.map((item, idx) => (
      <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
    ))}
            <div>
                <h2>Select Your Gender</h2>
                Gender is important for form. 
            </div>
            
            <div className="gender--select">
            <h1 className="gender--text">{gender}</h1>
            <label className="male">
              <input type="radio" name="gender" value="Male"  onChange={e=>setGender(e.target.value)}/>Male
              <img  src="https://i.ibb.co/r6mpKBL/Male.png" width="130" height="160"  />
            </label>
            <label className="female">
              <input type="radio" name="gender" value="Female"  onChange={e=>setGender(e.target.value)}/>Female
              <img src="https://i.ibb.co/Svmt803/Female.png" width="150" height="170" />
            </label> 

            </div> 
            <div>
                <button onClick={() => navigate('/Date')} className="btn btn-primary ">Continue</button>
            </div>
        </div>
    );

    }

