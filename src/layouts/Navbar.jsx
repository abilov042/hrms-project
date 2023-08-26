import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    
    <div className="Navbar">
      
      <Menu>
      <Container>
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
          <Link to={"/home"}>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/candidateCVs"}>Candidate CV</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/adCv"}>Ad Cv</Link>
        </Menu.Item>
        </Container>
      </Menu>
      
    </div>
  );
}
