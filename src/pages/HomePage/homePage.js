import React from "react";
import "./homePage.css";
import LogoPic from "../../images/logopicture.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const Navigate = useNavigate();
  const nextPage = () => {
    Navigate("/instruction");
  };

  return (
    <div className="entire">
      <div className="leftSide">
        <img src={LogoPic} alt="Logo" />
      </div>
      <div className="rightSide">
        <h1 className="titleH">
          <span className="firstLetter">T</span>HIS
        </h1>
        <h1 className="titleH">
          <span className="firstLetter">I</span>S
        </h1>
        <h1 className="titleH">
          <span className="firstLetter">M</span>Y
        </h1>
        <h1 className="titleH">
          <span className="firstLetter">E</span>XPERIENCE
        </h1>
      </div>
      <div className="buttonHome" onClick={nextPage}>
        Begin
      </div>
    </div>
  );
};

export default HomePage;
