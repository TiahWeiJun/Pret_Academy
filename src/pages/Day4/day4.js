import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day4Page = (props) => {
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
    const newBalance = totalBalance - 20;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("");
    setMessage1(
      "Your daughter is much better after getting some medicine from the doctor and is sleeping peacefully when you reach home"
    );
    setMessage2("");
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("");
    setMessage1(
      "Your daughter has a fever when you get home and you find some panadol to give her. "
    );
    setMessage2(
      " Self-medication can be dangerous and a mild fever could be an indication of something more serious!"
    );
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };

  return (
    <Layout leftChoice={greennextPage} rightChoice={pinknextPage}>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> While you are at work, you receive a
          call from your husband telling you that your daughter has a mild fever
          (37.8C) when returning home from school.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$20</p>
              <p className="word">Ask them to go to the doctor</p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">Ask them to stay at home</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day4Page;
