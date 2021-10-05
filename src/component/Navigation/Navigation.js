import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="nav-bar" variant="dark">
        <Container>
          <Link to="/" className="nav">
            <b>Course Master</b>
          </Link>
          <Nav className="ms-auto">
            <NavLink
              className="nav"
              to="/home"
              activeStyle={{
                fontWeight: "bolder",
                color: "white",
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="nav"
              to="/services"
              activeStyle={{
                fontWeight: "bolder",
                color: "White",
              }}
            >
              Services
            </NavLink>
            <NavLink
              className="nav"
              to="/about"
              activeStyle={{
                fontWeight: "bolder",
                color: "white",
              }}
            >
              About Us
            </NavLink>
            <NavLink
              className="nav"
              to="/contact"
              activeStyle={{
                fontWeight: "bolder",
                color: "white",
              }}
            >
              Contact Us
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
