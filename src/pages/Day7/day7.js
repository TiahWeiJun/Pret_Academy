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
    const newBalance = totalBalance - 30;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("");
    setMessage1(
      "Your daughter comes home from USS and tells you about the wonderful time she had!"
    );
    setMessage2("");
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("Family Strike");
    setMessage1("Mom guilt is REAL!");
    setMessage2(
      "You daughter is dissapointed and feels left out of feeling 'normal' and being with her friends. She starts withdrawing at home. "
    );
    setMessage3("");
    setWarning("");

    const newFamilyStrike = familyStrike + 1;
    setFamilyStrike(newFamilyStrike);
    if (newFamilyStrike === 1) {
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
          <p id="situation">Situation: </p> Your daughter's school is organising
          a trip to Universal studios but you would need to pay $30.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$30</p>
              <p className="word">Pay $30</p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">
                Don’t pay and keep your child in studentcare that day
              </p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day7Page;
