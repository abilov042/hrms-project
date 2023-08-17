import React from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
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
      </Menu>
      
      <Routes>
        <Route path="/" >
          <Route path="/login" index element={<Login/>} />
          <Route path="/register" index element={<Register/>} />
        </Route>
      </Routes>
    
      
    </div>
  );
}
