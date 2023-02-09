import React from "react";
import { arrow } from "../../assets";
import "./Step.css";
const Step = ({ num, text }) => {
  return (
    <div className="step">
      <div className="step-circle">
        <p>{num}</p>
      </div>

      <div className="step-heading">
        <img src={arrow} alt="arrow" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Step;
