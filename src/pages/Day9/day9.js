import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day9Page = () => {
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
          <p id="situation">Situation: </p> Your prepaid card is out of credits
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <div className="cost">-20$</div>
            <p id="g">Top up to stay connected</p>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Be uncontactable</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day9Page;
