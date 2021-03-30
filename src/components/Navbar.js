import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"black"}} variant="dark">
      <Navbar.Brand href="#home">

      <Link to="/" class="item">
          <h2 style={{ fontWeight: "700" }}>
            {" "}
            <Icon name="pin" />
            TickerTok{" "}
          </h2>
        </Link>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"white"}} />
      <Navbar.Collapse id="responsive-navbar-nav" style={{color:"white"}} >
        <Nav className="mr-auto">

        </Nav>
        <Nav  >
        <Link to="/carousel" class="item" style={{color:"white", padding:"15px"}} >
        Press
      </Link>
      <Link to="/faq" class="item" style={{color:"white", padding:"15px"}}>
        FAQ
      </Link>
      <Link to="/results" class="item" style={{color:"white", padding:"15px"}}>
        How It Works
      </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
