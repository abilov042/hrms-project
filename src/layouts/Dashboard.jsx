import React from "react";
import Navbar from "./Navbar";
import CandidateCVs from "../pages/CandidateCVs";
import CandidateCVDetalis from "../pages/CandidateCVDetalis";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Container } from "semantic-ui-react";
import Home from "../pages/Home";



export default function Dashboard() {
  return (
    <div>
      
      <Navbar />
      <Container>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/candidateCVs" element={<CandidateCVs/>}/>
            <Route path="/candidateCVs/:id" element={<CandidateCVDetalis/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </Container>
      {/* <Footer/> */}
      
      
     
    </div>
  );
}
