import React from "react";
import "./Process.css";
import { long_arrow } from "../../assets";
import Step from "../Step/Step";
const Process = () => {
  return (
    <div className="process" id="Process">
      <div className="process-first">
        <div className="process-first-left">
          <div className="process-first-left-heading">
            <p>HOW WE BUILD</p>
          </div>
          <div className="process-first-left-text">
            <p>WITH HYDRA VR?</p>
            <img src={long_arrow} alt="long-arrow" />
          </div>
        </div>
        <div className="process-first-right">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat <br /> nibh sed pulvinar proin gravida hendrerit lectus.
            Mi sit amet mauris commodo <br /> quis imperdiet massa tincidunt
            nunc. Viverra aliquet eget sit amet tellus. Ornare <br /> lectus sit
            amet est placerat in. Lectus magna fringilla urna porttitor rhoncus
            vitae.
          </p>
        </div>
      </div>
      <div className="process-second">
        <div className="process-second-first">
          <Step num="01" text="3D Conception & Design" />
        </div>
        <div className="process-second-second">
          <Step num="02" text="Interaction Design" />
        </div>
        <div className="process-second-third">
          <Step num="03" text="VR World User Testing" />
        </div>
        <div className="process-second-forth">
          <Step num="04" text="Hydra VR Deploy" />
        </div>
      </div>
    </div>
  );
};

export default Process;
