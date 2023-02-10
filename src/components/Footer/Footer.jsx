import React from "react";
import "./Footer.css";
import {
  logo,
  footer,
  facebook,
  twitter,
  linkedin,
  youtube,
  instagram,
  pinterest,
} from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first">
        <div className="footer-first-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-first-line">
          <img src={footer} alt="footer" />
        </div>
        <div className="footer-first-menu">
            <div>
              <a href="#about" className="navbar-about">
                ABOUT
              </a>
            </div>
            <div>
              <a href="#service" className="navbar-service">
                SERVICES
              </a>
            </div>
            <div>
              <a href="#Technology" className="navbar-technology">
                TECHNOLOGIES
              </a>
            </div>
            <div>
              <a href="#Process" className="navbar-process">
                HOW TO
              </a>
            </div>
            <div>
              <a href="#JoinUs" className="navbar-process">
                JOIN HYDRA
              </a>
            </div>
        </div>
        <div className="footer-first-line">
          <img src={footer} alt="footer" />
        </div>
        <div className="footer-first-list">
          <ul>
            <li>F.A.Q</li>
            <li>SITEMAP</li>
            <li>CONDITIONS</li>
            <li>LICENSES</li>
          </ul>
        </div>

        <div className="footer-first-line">
          <img src={footer} alt="footer" />
        </div>

        <div className="footer-first-social">
          <p>SOCIALIZE WITH HYDRA</p>
          <div className="footer-first-social-icons">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="instagram" />
            <img src={pinterest} alt="pinterest" />
          </div>
          <button>BUILD YOUR WORLD</button>
        </div>
      </div>
      <div className="footer-copyright">
        <p>2023 © HYDRA LANDING PAGE - BY ANSH KATARIA - ALL RIGHTS RESERVED </p>
      </div>
    </div>
  );
};

export default Footer;
