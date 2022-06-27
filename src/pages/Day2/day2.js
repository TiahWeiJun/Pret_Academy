import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day2Page = () => {
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
    // -200$  Good on you for keeping up with your payments.
  };
  const pinknextPage = () => {
    Navigate("/consequence");
    // // -0$  "Your utilities are CUT! Your water supply is reduced to trickles!
    //
    // HDB officers have visited you and give you a ""PINK"" slip. You are at risk of losing your home if you miss another rent payment.

    // You need to stand for the rest of the game until you’ve paid your rent."
  };

  return (
    <Layout>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Bills are due today{" "}
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <div className="cost">-200$</div>
            <p id="g">
              Pay for rent ($120) and utilities ($50) + Late Fees ($30)
            </p>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Don’t Pay</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day2Page;
