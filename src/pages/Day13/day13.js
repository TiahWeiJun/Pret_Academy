import React, { useContext, useEffect } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day13Page = () => {
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
    const newBalance = totalBalance - 75;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);
    setStrikeTitle("");
    setMessage1(
      "Taking care of your mental well-being is just as important as your physical health."
    );
    setMessage2(
      "Going to a therapist/counsellor early is key to being on the road to recovery."
    );
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);

    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("Health Strike");
    setMessage1(
      "The state of your mental health is just as important as your physical health."
    );
    setMessage2(
      "Not taking care of of your mental health could hinder your ability to work and take care of your family."
    );
    setMessage3("");
    setWarning("");

    const newHealthStrike = healthStrike + 1;
    setHealthStrike(newHealthStrike);
    if (newHealthStrike === 3) {
      setWarning("Accumulating 3 Health Strikes earns you a Work Strike!");
      setWorkStrike((strike) => strike + 1);
    }

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };

  return (
    <Layout leftChoice={greennextPage} rightChoice={pinknextPage}>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Trying to keep your family afloat is
          wearing you down. You think you might be depressed.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$75</p>
              <p className="word">
                Get Help (Prescription Antidepressants or see a Therapist){" "}
              </p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">Tell yourself you’re fine</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day13Page;
