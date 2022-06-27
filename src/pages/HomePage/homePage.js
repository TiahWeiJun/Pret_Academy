import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const Navigate = useNavigate();
  const nextPage = () => {
    Navigate("/1");
  };

  return (
    <div className="centraldiv">
      <div className="spacearounddiv">
        <div className="introtext" id="gamename">
          THIS IS MY EXPERIENCE
        </div>
        <div className="babydiv">
          <div className="introtext" id="background">
            Background
          </div>
          <ul>
            <li>42 year old women</li>
            <li>GCE N level</li>
            <li>Two children</li>
            <li>13 year old son</li>
            <li>8 year old daughter</li>
            <li className="uncomfortableli">
              44 years old husband was a driver but temporarily unable to work
              because of mobility and health conditions
            </li>
            <li>Minimal work experience due to care-giving responsibilities</li>
            <li>Last did part time before daughter was born 8 years ago</li>
            <li>
              Family only has <b>$600</b> of saving left
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="buttonspace" onClick={nextPage}>
          Accept the challenge
        </div>
      </div>
    </div>
  );
};

export default HomePage;
