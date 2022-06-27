import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day7Page = () => {
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
    // -30$
  };
  const pinknextPage = () => {
    Navigate("/consequence");
    // -0$
  };

  return (
    <Layout>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Your daughter's school is organising
          a trip to Universal studios but you would need to pay $30.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <div className="cost">-30$</div>
            <p id="g">Pay $30</p>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Don’t pay and keep your child in studentcare that day</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day7Page;
