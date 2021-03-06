import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day5Page = (props) => {
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
    const newBalance = totalBalance - 50;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("");
    setMessage1(
      "Luckily you were able to pay a neighbour to help you watch your daughter while you go to work."
    );
    setMessage2("");
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    const newBalance = totalBalance - 25;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("Work Strike");
    setMessage1(
      "You are still on probation and do not have child-care/child sick leave. Taking no-pay leave when you have only just started work. Your boss isn't too happy."
    );
    setMessage2("Money will be deducted from your next paycheck");
    setMessage3("");
    setWarning("");

    const newWorkStrike = workStrike + 1;
    setWorkStrike(newWorkStrike);
    if (newWorkStrike === 3) {
      setWarning(
        "Accumulating 3 Work Strikes could result in you losing your job!"
      );
    }

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };

  return (
    <Layout leftChoice={greennextPage} rightChoice={pinknextPage}>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> Our daughter still has a fever and
          has to stay home for the day. Your husband is unable to watch her as
          he has a doctor's appointment and you need to work???
        </div>

        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$50</p>
              <p className="word">
                Get a babysitter to take care of your child
              </p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$25</p>
              <p className="word">
                Ask your boss to give you no-pay leave to take care of your
                child
              </p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day5Page;
