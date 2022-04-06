import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";


export default function Place() { 

  const navigate = useNavigate()
  const testData = [
    { bgcolor: "#6a1b9a", completed: 66.6 },
    ];
    return(
       <div>
           <div className="container">
           {testData.map((item, idx) => (
      <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
    ))}
             <h3>Please Enter Your Place of Birth</h3>
             <input type="text" placeholder="City/Country" />
           </div>
           <div className="row">
             <button onClick={() => navigate('/Loading')} className="btn btn-primary col-sm-2 offset-sm-5 ">Finish Your Survey!</button>
           </div>
       </div>

       
    );
}