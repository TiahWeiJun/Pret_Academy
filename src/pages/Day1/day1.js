import React, { useContext } from "react";
import "./day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day1Page = () => {
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

  const Navigate = useNavigate();
  const greennextPage = () => {
    Navigate("/consequence");
    // -10$
  };
  const pinknextPage = () => {
    Navigate("/consequence");
    // -2$
  };

  return (
    <Layout>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> It’s your first day of work and your
          children were not co-operative causing you to be running late after
          dropping them off at school.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$10</p>
              <p className="word">Take a Grab to get to work on time</p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$2</p>
              <p className="word">Take the bus and reach work 30 mins late</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day1Page;
