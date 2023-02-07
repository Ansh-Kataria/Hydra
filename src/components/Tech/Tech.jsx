import React from "react";
import "./Tech.css";
import {
  arrow,
  arrowDown,
  unrealEngine,
  oculus,
  unity,
  vive,
  brands,
} from "../../assets";

const Tech = () => {
  return (
    <div className="tech">
      <div className="tech-first">
        <div className="tech-first-heading">
          <p>TECHNOLOGIES & HARDWARE</p>
        </div>
        <div className="tech-first-subheading">
          <p>USED BY HYDRA VR.</p>
        </div>
        <div className="tech-first-icon">
          <img src={arrowDown} alt="arrowDown" />
        </div>
      </div>
      <div className="tech-second">
        <img src={brands} alt="brands" />
      </div>
    </div>
  );
};

export default Tech;
