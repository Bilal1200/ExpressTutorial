import React from "react";
import "./App.css";
 
import Landing from "./Components/Landing/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 function App() {
   
  return (
    <>
     <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
       
    </Routes>
  </Router> </>
  );
}

export default App