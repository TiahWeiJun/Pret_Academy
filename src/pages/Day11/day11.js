import React, { useContext, useEffect } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day11Page = () => {
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
    const newBalance = totalBalance - 200;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);
    setStrikeTitle("");
    setMessage1("You are now more confident in your Microsoft Office Skills");
    setMessage2(
      "Your boss is also impressed with your willingness to upgrade yourself."
    );
    setMessage3("Remove 1 Work Strike.");
    setWarning("");

    if (workStrike - 1 < 0) {
      setWorkStrike(0);
    } else {
      setWorkStrike((strike) => strike - 1);
    }

    setPlayAlarm(false);

    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("");
    setMessage1(
      "Skills upgrading and continuous learning can help ensure career progression at your workplace and lead to better opportunities. "
    );
    setMessage2("But it comes at a cost.");
    setMessage3("Can you afford it?");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };

  return (
    <Layout leftChoice={greennextPage} rightChoice={pinknextPage}>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Your boss has asked you to take up a
          Microsoft Office course. He has offered to reimburse you the $200
          course fee after you have completed the 6-weeks course and enticed you
          with a higher pay after a 6-months probation.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$200</p>
              <p className="word">Take the course</p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">Say you will need some time to consider </p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day11Page;
