import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import Login from "./Login";
import Register from "./Register";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Menu>
        <Menu.Item>
          <Link to={"/register"}>
            <Button primary>Sign up</Button>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to={"/login"}>
            <Button>Log-in</Button>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/candidateCVs"}>Candidate CV</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
