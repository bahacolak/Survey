import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Place() {
  const [place, setPlace] = useState(); 

  const navigate = useNavigate()

    return(
       <div>
           <div>
             <h3>Please Enter Your Place of Birth</h3>
             <input type="text" placeholder="City/Country" />
           </div>
           <div>
             <button onClick={() => navigate('/Loading')} className="btn btn-primary ">Finish Your Survey!</button>
           </div>
       </div>

       
    );
}