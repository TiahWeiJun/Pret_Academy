import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day6Page = () => {
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
    // -100$
  };
  const pinknextPage = () => {
    Navigate("/consequence");
    // -0$
  };

  return (
    <Layout>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Your husband has diabetes and
          hypertension and has run out of his crucial medication but doesn’t
          have the $100 he needs to buy it.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <div className="cost">-100$</div>
            <p id="g">Buy it for him</p>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Say No</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day6Page;
