import React, { Component } from "react";
import NavBar from "./commons/navBar";
import my_pic from "../img/cv_img2.png";
import speed from "../img/speed.svg";
import dynamic from "../img/dynamic.svg";
import responsive from "../img/responsive.svg";

const About = () => {
  return (
    <div className="about_section">
      <div className="abt_txt">
        <h2>ABOUT</h2>
      </div>
      <div className="abt_left">
        <div className="abt_me">
          <img src={my_pic} alt="" className="my_img" />
          <p>
            " I'm a FullStack Developer and UI Designer in India. And I'm really
            passionate about interactive web-design and animations.I also do
            data analysis with python as my strong background "
          </p>
        </div>
      </div>
      <div className="abt_right">
        <ul className="skills_lists">
          <li className="skill_list">
            <h5>HTML/CSS</h5>
          </li>
          <li className="skill_list">
            <h5>JavaScript</h5>
          </li>
          <li className="skill_list">
            <h5>React Native</h5>
          </li>
          <li className="skill_list">
            <h5>Reactjs</h5>
          </li>
          <li className="skill_list">
            <h5>Nodejs</h5>
          </li>
          <li className="skill_list">
            <h5>Python</h5>
          </li>
          <li className="skill_list">
            <h5>Data Analysis</h5>
          </li>
          <li className="skill_list">
            <h5>Machine Learning</h5>
          </li>
          <li className="skill_list">
            <h5>Adobe AE</h5>
          </li>
          <li className="skill_list">
            <h5>Adobe Illustrator</h5>
          </li>
          <li className="skill_list">
            <h5>Adobe PhotoShop</h5>
          </li>
        </ul>
      </div>
      <div className="abilities">
        <div className="all_abl"></div>
        <div className="all_abl"></div>
        <div className="all_abl"></div>
      </div>
    </div>
  );
};

export default About;
