import React from "react";
import "./Navbar.css";
import { logo, name } from "../../assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-first">
        <div className="navbar-first-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-first-name">
          <img src={name} alt="name" />
        </div>
      </div>
      <div className="navbar-second">
        <a href="#about" className="about">
          ABOUT
        </a>
        <a href="#service" className="service">
          SERVICES
        </a>
        <a href="#Technology" className="technology">
          TECHNOLOGIES
        </a>
        <a href="#Process" className="process">
          PROCESS
        </a>
      </div>
      <div className="navbar-third">
        <div className="navbar-third-div-contact-us">
          <button className="navbar-third-btn-contact-us">CONTACT US</button>
        </div>
        <div className="navbar-third-div-Join">
          <button className="navbar-third-btn-Join">JOIN HYDRA</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
