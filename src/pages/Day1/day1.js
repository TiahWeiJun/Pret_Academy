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
            <div className="cost">-10$</div>
            <p id="g">Take a Grab to get to work on time</p>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <div className="cost">-2$</div>
            <p id="p">Take the bus and be 30mins late</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day1Page;
