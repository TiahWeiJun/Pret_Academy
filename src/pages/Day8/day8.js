import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day8Page = () => {
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
    // -80$
  };
  const pinknextPage = () => {
    Navigate("/consequence");
    // -20$
  };

  return (
    <Layout>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Your EZ-link is low on value and
          EZ-link is having a one-day promotion today. Get $100 in fare value by
          paying $80!
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <div className="cost">-80$</div>
            <p id="g">Get the promotion</p>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <div className="cost">-20$</div>
            <p id="p">Just top up what you need</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day8Page;
