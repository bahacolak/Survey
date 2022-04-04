import './App.css';
import Date from "./components/Date"
import Gender from "./components/Gender"
import {Routes, Route} from "react-router-dom"

function App() {
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
