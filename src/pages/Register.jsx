import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import CandidateSignUp from "./CandidateSignUp";
import EmployeeSignUp from "./EmployerSignUp";

export default function Register() {
  const [activeItem, setActiveItem] = useState("Candidate");
  useEffect(() => {}, [activeItem]);

  return (
    <div>
      <Menu tabular  >
        <Menu.Item
          name="Candidate"
          active={activeItem === "Candidate"}
          onClick={() => setActiveItem("Candidate")}
        />
        <Menu.Item
          name="Employer"
          active={activeItem === "Employer"}
          onClick={() => setActiveItem("Employer")}
        />
      </Menu>
      {activeItem === "Candidate" ? <CandidateSignUp /> : <EmployeeSignUp />}
    </div>
  );
}
