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
    const newBalance = totalBalance - 20;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("");
    setMessage1(
      "Great you did not miss out an important text from your boss updating you on some work matters."
    );
    setMessage2("");
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("Social Strike");
    setMessage1(
      "Human beings are social creatures and we need connection and social support."
    );
    setMessage2("");
    setMessage3("");
    setWarning("");

    const newSocialStrike = socialStrike + 1;
    setSocialStrike(newSocialStrike);
    if (newSocialStrike === 3) {
      setWarning(
        "Accumulating 3 Social Strikes will earn you a Health Strike!"
      );
      setHealthStrike((strike) => strike + 1);
    }

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };

  return (
    <Layout leftChoice={greennextPage} rightChoice={pinknextPage}>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Your prepaid card is out of credits
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$20</p>
              <p className="word">Top up to stay connected</p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">Be uncontactable</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day9Page;
