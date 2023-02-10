import React from "react";
import "./Hero.css";
import { hero, arrow, location, phone, mail } from "../../assets";

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
      <div className="hero-second" id="ContactUs">
        <div className="hero-second-location">
          <div className="hero-second-location-left">
            <img src={location} alt="location" />
          </div>
          <div className="hero-second-location-right">
            <div className="hero-second-location-right-heading">
              <p>Pay Us a Visit</p>
            </div>
            <div className="hero-second-location-right-text">
              <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
        </div>
        <div className="hero-second-phone">
          <div className="hero-second-phone-left">
            <img src={phone} alt="phone" />
          </div>
          <div className="hero-second-phone-right">
            <div className="hero-second-phone-right-heading">
              <p>Give Us a Call</p>
            </div>
            <div className="hero-second-phone-right-text">
              <p>(110) 1111-1010</p>
            </div>
          </div>
        </div>
        <div className="hero-second-mail">
          <div className="hero-second-mail-left">
            <img src={mail} alt="mail" />
          </div>
          <div className="hero-second-mail-right">
            <div className="hero-second-mail-right-heading">
              <p>Send Us a Message</p>
            </div>
            <div className="hero-second-phone-right-text">
              <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
