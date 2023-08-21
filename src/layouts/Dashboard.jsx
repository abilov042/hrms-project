import React from "react";
import Navbar from "./Navbar";
import CandidateCVs from "../pages/CandidateCVs";
import CandidateCVDetalis from "../pages/CandidateCVDetalis";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="login" Component={Login} />
          <Route path="register" Component={Register} />
          <Route path="candidateCVs" Component={CandidateCVs}/>
          <Route path="candidateCVs/:id" Component={CandidateCVDetalis}/>
        </Route>
      </Routes>
    </div>
  );
}
