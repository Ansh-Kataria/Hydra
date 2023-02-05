import React from "react";
import "./Contact.css"
const Contact = ({ icon, heading, text }) => {
  return (
    <div className="contact">
      <div className="contact-left">
        <img src={icon} alt="logo" />
      </div>
      <div className="contact-right">
        <div className="contact-right-heading">
            <h1>{heading}</h1>
        </div>
        <div className="contact-right-text">
            <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
