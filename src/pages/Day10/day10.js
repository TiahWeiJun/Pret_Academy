import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day10Page = () => {
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
          <p id="situation">Situation: </p> Some of son's friends are going to
          Wild Wild Wet as a reward for doing well on their mid year exams.
          However, the entrance fee is $24.{" "}
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$24</p>
              <p className="word">Give your son the money to go</p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">Tell him no</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day10Page;
