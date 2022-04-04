import React, { useState } from "react";


 export default function Gender(){ 
  
      
 
  const[gender, setGender]=useState();
    return(
        <div>
            <div>
                <h2>Select Your Gender</h2>
                Gender is important for form. 
            </div>
            <h1>{gender}</h1>
            <label>
              <input type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value)}/>Male
              <img src="https://i.ibb.co/r6mpKBL/Male.png" />
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/>Female
              <img src="https://i.ibb.co/Svmt803/Female.png" />
            </label> 

            <div>
                <button>Continue</button>
            </div>
        </div>
    );

    }

