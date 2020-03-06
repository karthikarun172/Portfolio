import React from "react";
import NavBar from "./commons/navBar";
import website from "../img/png.png";

const Project = () => {
  return (
    <div id="projects">
      <div className="projects">
        <div className="project_txt">
          <h3 className="p_txt">Project's</h3>
        </div>
        <div className="my_works">
          <div className="my_works_in_flex">
            <div className="motionGraphics">
              <iframe
                src="https://www.youtube.com/embed/t_QZA8iQRyI"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="te">
              <img className="wb" src={website} alt="" />
              <h3>SnapUp.com</h3>
              <p>
                Snap up is an E-commerce website made using React and Node js
              </p>
            </div>
            <div className="tewd">
              <iframe
                src="https://www.youtube.com/embed/59097_2gtmA"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
