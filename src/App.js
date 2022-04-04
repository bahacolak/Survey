import './App.css';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
//Pages
import Date from "./components/Date";
import Gender from "./components/Gender";

function App() {
  const [cartIsEmpty] = useState(true)
  return ( 
   <>
    <Routes>
      <Route index element={<Gender />}/>
      <Route path='Date' element={<Date />} />
    </Routes>
    </>
   );
}

export default App;
