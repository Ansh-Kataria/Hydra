import React from "react";
import "./About.css";
import { long_arrow, about } from "../../assets";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-first">
        <div className="about-first-left">
          <div className="about-first-left-heading">
            <p>INTRODUCTION</p>
          </div>
          <div className="about-first-left-text">
            <p>TO HYDRA VR</p>
            <img src={long_arrow} alt="long-arrow" />
          </div>
        </div>
        <div className="about-first-right">
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
      <div className="about-second">
        <div className="about-second-left">
          <img src={about} alt="about" />
        </div>
        <div className="about-second-right">
          <div className="about-second-right-heading">
            <p>ABOUT</p>
          </div>
          <div className="about-second-right-subheading">
            <p>HYDRA VR</p>
          </div>
          <div className="about-second-right-text">
            <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. eros donec odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam llicitudi n tempor.
            </p>
          </div>
          <div className="about-second-right-btn">
            <button>LET’S GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
