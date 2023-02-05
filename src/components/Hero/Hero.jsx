import React from "react";
import "./Hero.css";
import { hero, arrow, location, phone, mail } from "../../assets";
import Contact from "../Contact/Contact";

const contactData = [
  {
    icon: location,
    heading: "Pay Us a Visit",
    text: "Union St, Seattle, WA 98101, United States",
  },
  {
    icon: phone,
    heading: "Give Us a Call",
    text: "(110) 1111-1010",
  },

  {
    icon: mail,
    heading: "Send Us a Message",
    text: "Contact@HydraVTech.com",
  },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-first">
        <div className="hero-first-left">
          <div className="hero-first-left-heading">
            <div className="hero-first-left-heading-first">
              <div className="hero-first-left-heading-first-left">
                <h1>Dive</h1>
              </div>
              <div className="hero-first-left-heading-first-right">
                <h1>Into The Depths</h1>
              </div>
            </div>
            <div className="hero-first-left-heading-second">
              <div className="hero-first-left-heading-second-left">
                <h1>Of</h1>
              </div>
              <div className="hero-first-left-heading-second-right">
                <h1>Virtual Reality</h1>
              </div>
            </div>
          </div>
          <div className="hero-first-left-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />{" "}
              nisl tincidunt eget. Lectus mauris eros in vitae .
            </p>
          </div>
          <div className="hero-first-left-third">
            <button className="hero-first-left-third-btn">
              BUILD YOUR WORLD
            </button>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="hero-first-right">
          <div className="hero-first-right-rect">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
      <div className="hero-second">
        {contactData.map((item, index) => (
          <Contact
            icon={item.icon}
            heading={item.heading}
            text={item.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
