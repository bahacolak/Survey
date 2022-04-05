import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Date.css"

export default function Date() {
  const [date, setDate] = useState();

  const navigate = useNavigate()
  return (
    
    <div>
      <div className='container'>
      <div className='text--date'><h1>Your Date of Birth: {date}</h1>
       <input type="date" onChange={e =>setDate(e.target.value)}/>
      </div>
      </div>

      <div className='row'> 
        <button onClick={() => navigate('/Place')} className="btn btn-primary col-sm-2 offset-sm-5">Continue</button>
      </div>
    </div>
    
  );
}



