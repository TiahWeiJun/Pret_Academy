import React, { useContext, useEffect } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import avatar from "../../images/avatar.png";

const HomePage = () => {
  const {
    day,
    setDay,
    totalBalance,
    setTotalBalance,
    familyStrike,
    setFamilyStrike,
    healthStrike,
    setHealthStrike,
    workStrike,
    setWorkStrike,
    socialStrike,
    setSocialStrike,
    playAlarm,
    setPlayAlarm,
    strikeTitle,
    setStrikeTitle,
    message1,
    setMessage1,
    message2,
    setMessage2,
    message3,
    setMessage3,
    warning,
    setWarning,
  } = useContext(AppContext);

  useEffect(() => {
    setDay(1);
    setTotalBalance(600);
    setFamilyStrike(0);
    setWorkStrike(0);
    setHealthStrike(0);
    setSocialStrike(0);
    setPlayAlarm(false);
    setStrikeTitle("");
    setMessage1("");
    setMessage2("");
    setMessage3("");
    setWarning("");
  }, []);

  const Navigate = useNavigate();
  const nextPage = () => {
    Navigate("/1");
  };

  return (
    <div className="centraldiv">
      <div className="titleHome" id="gamename">
        THIS IS MY EXPERIENCE
      </div>
      <div className="spacearounddiv">
        <div className="leftSide">
          <img
            src={avatar}
            alt="female avatar"
            height={350}
            width={350}
            className="avatar"
          />
        </div>
        <div className="babydiv">
          <div>
            <p className="bg">
              44 years old husband was a driver but temporarily unable to work
              because of mobility and health conditions
            </p>
            <hr></hr>
            <p className="bg">
              Minimal work experience due to care-giving responsibilities
            </p>
            <hr></hr>
            <p className="bg">
              Last did part time before daughter was born 8 years ago
            </p>
            <hr></hr>
            <p className="bg">
              Family only has <b>$600</b> of savings left
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="buttonspace" onClick={nextPage}>
          Accept Challenge
        </div>
      </div>
    </div>
  );
};

export default HomePage;
