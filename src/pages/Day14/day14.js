import React, { useContext, useEffect } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day14Page = () => {
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
    const newBalance = totalBalance - 300;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);
    setStrikeTitle("");
    setMessage1(
      "Your son performed well at the tournament and his teachers were impressed with his public speaking skills and maturity."
    );
    setMessage2(
      "Your son came back confident and very grateful for an experience of a lifetime."
    );
    setMessage3("Remove 1 Family Strike.");
    setWarning("");

    if (familyStrike - 1 < 0) {
      setFamilyStrike(0);
    } else {
      setFamilyStrike((strike) => strike - 1);
    }

    setPlayAlarm(false);

    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("");
    setMessage1(
      "Investment in your child's education and future opportunities are important.  "
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
          <p id="situation">Situation: </p> Your son has been selected to
          represent his school at an international debate tournament in Hong
          Kong. Hotel Stay and expenses will be covered but you will still need
          to pay for his flight
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$300</p>
              <p className="word">Pay for the Flight </p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">Forego the opportunity</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day14Page;
