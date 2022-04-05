import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Date() {
  const [date, setDate] = useState();

  const navigate = useNavigate()
  return (
    
    <div>
      <div><h1>Your Date of Birth: {date}</h1>
       <input type="date" onChange={e =>setDate(e.target.value)}/>
      </div>

      <div>
        <button onClick={() => navigate('/Place')} className="btn btn-primary ">Continue</button>
      </div>
    </div>
    
  );
}



