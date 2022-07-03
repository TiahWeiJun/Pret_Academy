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
    const newBalance = totalBalance - 24;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("");
    setMessage1(
      "Your son comes home and shares with you all the fun details from the day!"
    );
    setMessage2("");
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("Family Strike");
    setMessage1(
      "Your son comes home and shares with you all the fun details from the day!"
    );
    setMessage2("");
    setMessage3("");
    setWarning("");

    const newFamilyStrike = familyStrike + 1;
    setFamilyStrike(newFamilyStrike);
    if (newFamilyStrike === 3) {
      setWarning(
        "You have 3 family strikes. This will earn you a visit from a concerned social worker as you are deemed as not being able to care for your children in the best possible way. The stress from being seen as an incompetent mother and worry about your children being taken from you earns you a Health Strike as well. "
      );
      setHealthStrike((strike) => strike + 1);
    } else if (newFamilyStrike === 5) {
      setWarning(
        "You have 5 family strikes and your children will be taken away "
      );
    }

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };

  return (
    <Layout leftChoice={greennextPage} rightChoice={pinknextPage}>
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
