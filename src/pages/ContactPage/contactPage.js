import React from "react";
import "./contactPage.css";
import logopicture from "../../images/logopicture.png";
import facebook from "../../images/Facebook-logo.png";
import link from "../../images/linkedin.png";
import instagram from "../../images/insta.png";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="back">
      <div className="leftContact">
        <p className="thx">Thank You</p>
        <p className="thx1">for your participation</p>
      </div>

      <div className="rightContact">
        <div>
          <h1 className="titleContact">Be a DOT Empowerer</h1>
          <div className="face">
            <img className="facepic" src={facebook} alt="fireSpot" />
            <p className="line1">/daughtersoftomorrow</p>
          </div>

          <div className="insta">
            <img className="instapic" src={instagram} alt="fireSpot" />
            <p className="line">@daughtersoftomorrow</p>
          </div>

          <div className="linkclass">
            <img className="link" src={link} alt="fireSpot" />
            <p className="line2">/company/daughtersoftomorrow</p>
          </div>
        </div>

        <div className="contact">
          <p className="titleContact">Connect with us</p>
          <p className="sline">Brendan Seah</p>
          <p className="tline">Capacity And Partnership</p>
          <p className="fifthline">brendan@daughtersoftomorrow.org</p>
          <p className="sixthline">+65 9100 6540 </p>
        </div>

        <div className="feedback">
          Give us some feedback
          <a
            href="https://forms.gle/pJSS8MxHVkPbfAGo7"
            target="_blank"
            rel="noreferrer"
          >
            here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
