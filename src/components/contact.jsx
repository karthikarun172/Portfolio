import React, { Component } from "react";
import up from "../img/up_arrow.svg";
import copyright from "../img/cp2.svg";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <div className="contact_txt">
          <h3 className="c_txt">Contact</h3>
        </div>

        <div className="contact_box">
          <form action="" className="form">
            <br />
            <input
              type="text"
              className="name"
              placeholder="Name"
              name=""
              id=""
            />
            <br />
            <input
              type="text"
              className="name"
              placeholder="E-mail"
              name=""
              id=""
            />
            <br />
            <input
              type="text"
              className="name"
              placeholder="Message"
              name=""
              id=""
            />
            <br />
            <button className="submit">Submit</button>
          </form>
        </div>
        <div className="footer_sec">
          <footer className="footer">
            <div className="to_top">
              <img src={up} className="arrow" />
            </div>
            <div className="cp">
              <img src={copyright} className="cpr" alt="" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
