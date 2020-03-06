import React from "react";
import logo from "./logo.svg";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { Route, Switch, Redirect } from "react-router-dom";
import "../src/css_files/main.scss";
import Project from "./components/projects";
import NavBar from "./components/commons/navBar";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
