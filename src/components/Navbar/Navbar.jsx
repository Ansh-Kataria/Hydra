import React, { useState } from "react";
import "./Navbar.css";
import { logo, name } from "../../assets";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#about" className="about">
        ABOUT
      </a>
    </p>
    <p>
      <a href="#service" className="service">
        SERVICES
      </a>
    </p>
    <p>
      <a href="#Technology" className="technology">
        TECHNOLOGIES
      </a>
    </p>
    <p>
      <a href="#Process" className="process">
        PROCESS
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
        <Menu />
      </div>

      <div className="navbar-third">
        <div className="navbar-third-div-contact-us">
          <button className="navbar-third-btn-contact-us">CONTACT US</button>
        </div>

        <div className="navbar-third-div-Join">
          <button className="navbar-third-btn-Join">JOIN HYDRA</button>
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={50}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={54}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar-menu-container">
            <div className="navbar-menu-container-first">
              <Menu />
              <div className="navbar-menu-container-second">
                <button className="navbar-menu-btn-contact-us">
                  CONTACT US
                </button>
                <button className="navbar-menu-btn-Join">JOIN HYDRA</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
