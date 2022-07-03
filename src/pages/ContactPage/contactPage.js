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
      <div className="top">
        <div className="left">
          <p className="thx">Thank You!</p>

          <div className="insta">
            <img className="instapic" src={instagram} alt="fireSpot" />
            <p className="line">/daughtersoftomorrow</p>
          </div>

          <div className="face">
            <img className="facepic" src={facebook} alt="fireSpot" />
            <p className="line1">/daughtersoftomorrow</p>
          </div>

          <div className="linkclass">
            <img className="link" src={link} alt="fireSpot" />
            <p className="line2">/daughtersoftomorrow</p>
          </div>

          <div className="contact">
            <p className="fline">Contact</p>
            <p className="sline">Cheryl Chen</p>
            <p className="tline">Fundraising and Events Management</p>
            <p className="fourthline">Daughters Of Tomorrow</p>
            <p className="fifthline">Email: cheryl@DaughtersOfTomorrow.org</p>
            <p className="sixthline">Telephone:+65 9114-5055</p>
          </div>
        </div>

        <div className="right">
          <img className="logopic" src={logopicture} alt="new" />
          <p className="site">
            <b>
              <a
                href="https://daughtersoftomorrow.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://daughtersoftomorrow.org/
              </a>
            </b>
          </p>
        </div>
      </div>

      <div className="bottom">
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
  );
};

export default ContactPage;
