import React from 'react'
import "./Service.css"
const Service = ({logo, heading, text}) => {
  return (
        <div className="service">
            <div className="service-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="service-heading">
                <p>{heading}</p>
            </div>
            <div className="service-text">
                <p>{text}</p>
            </div>
            <div className="service-btn">
                <button>TRY IT NOW</button>
            </div>
        </div>
    )
}

export default Service