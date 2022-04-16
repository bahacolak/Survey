import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./Place.css"

export default function Place() { 

  const navigate = useNavigate()
  const testData = [
    { bgcolor: "#6a1b9a", completed: 66.6 },
    ];
    return(
       <div className="place">
           <div className="progressbar">
           {testData.map((item, idx) => (
      <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
    ))}
           </div>
           <div className="text--place">
             <h3 className="t--place">Please Enter Your Place of Birth</h3>
             <input type="text" placeholder="City/Country" />
           </div>
           <div>
             <button className="button" onClick={() => navigate('/Loading')}><span>Finish Your Survey!</span></button>
           </div>
       </div>

       
    );
}