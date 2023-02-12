import React from "react";
import "./Join.css";
const Join = () => {
  return (
    <div className="join" id="JoinUs">
      <div className="join-box">
        <div className="join-heading">
          <p>JOIN HYDRA</p>
        </div>

        <div className="join-subheading">
          <p>Let’s Build Your VR Experience</p>
        </div>
        <div className="join-name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="join-contact">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="join-subject">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="join-text">
          <input type="text" placeholder="Tell Us Something..." />
        </div>
        <div className="join-send-btn">
          <input type="submit" value="SEND TO HYDRA" />
        </div>
      </div>
    </div>
  );
};

export default Join;
