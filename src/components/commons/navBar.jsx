import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Project from "../projects";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="navigation">
      <ul className="list_main">
        <li className="list">
          <Link to="/" smooth={true} duration={1000} className="links">
            Home
          </Link>
        </li>
        <li className="list">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="links active"
          >
            About
          </Link>
        </li>
        <li className="list">
          <Link to="projects" smooth={true} duration={1000} className="links">
            Project
          </Link>
        </li>
        <li className="list">
          <Link to="contact" smooth={true} duration={1000} className="links">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
