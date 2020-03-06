import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="/">
      <header className="headers">
        <div className="header_text">
          <h1 className="title">
            <span>Hello, I'm</span>
            <span className="name">Arun Karthik</span>
          </h1>
          <h1 className="title1">
            <span>I'm a Designer,Developer and Data Analyst</span>
          </h1>
        </div>
        <div className="btn">
          <Link className="btn-main" to="about" smooth={true} duration={1000}>
            View my work
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
