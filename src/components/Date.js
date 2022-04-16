import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Date.css";
import ProgressBar from "./ProgressBar";

export default function Date() {
  const [date, setDate] = useState();

  const navigate = useNavigate()
  
  const testData = [
    { bgcolor: "#6a1b9a", completed: 33.3 },
    ];
  return (
    
    <div className='date'>
      <div className='progressbar'>
      {testData.map((item, idx) => (
      <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
    ))}
      </div>
      <div className='date--birth'>
       <h1 className='text--date'>Your Date of Birth: {date}</h1>
       <input type="date" onChange={e =>setDate(e.target.value)}/>
      </div>
      <div> 
        <button className="button" onClick={() => navigate('/Place')}><span>Continue</span></button>
      </div>
    </div>
    
  );
}



