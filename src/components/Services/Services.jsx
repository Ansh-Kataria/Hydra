import React from "react";
import "./Services.css";
import Service from "../Service/Service";
import {
  long_arrow,
  simulation,
  education,
  selfcare,
  outdoor,
} from "../../assets";

const Services = () => {
  return (
    <div className="services">
      <div className="services-first">
        <div className="services-first-left">
          <div className="services-first-left-heading">
            <p>WHY BUILD</p>
          </div>
          <div className="services-first-left-text">
            <p>WITH HYDRA?</p>
            <img src={long_arrow} alt="long-arrow" />
          </div>
        </div>
        <div className="services-first-right">
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
      <div className="services-second">
        <div className="services-second-simulation">
          <Service
            logo={simulation}
            heading="SIMULATION"
            text="Vitae sapien pellentesque habitant morbi 
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
          />
        </div>

        <div className="services-second-simulation">
          <Service
            logo={education}
            heading="EDUCATION"
            text="Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
          />
        </div>

        <div className="services-second-simulation">
          <Service
            logo={selfcare}
            heading="SELF-CARE"
            text="Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
          />
        </div>

        <div className="services-second-simulation">
          <Service
            logo={outdoor}
            heading="OUTDOOR"
            text="Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
