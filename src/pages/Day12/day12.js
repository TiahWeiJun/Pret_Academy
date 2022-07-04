import React, { useContext, useEffect } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import { AppContext } from "../../App";

const Day12Page = () => {
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
    setMessage1(
      "In Singapore, the rental rates are tiered, dependent on gross household incomes."
    );
    setMessage2(
      "If one's income crosses a certain threshold, they either have their rental increased, or possibly not be eligible to rent directly from HDB"
    );
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);

    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    setStrikeTitle("Work Strike");
    setMessage1(
      "While you were able to get a reduction of your rental to the current rates ($120) and get a reprieve to pay your rent 2 weeks later, but taking no-pay leave when you have only just started work makes your boss unhappy and earned you a work strike! "
    );
    setMessage2("Do YOU still have your job?");
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
          <p id="situation">Situation: </p> Your tenancy is up for renewal, as a
          result of your new job, your rent is increased to to $200 with
          immediate effect.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$200</p>
              <p className="word">Accept it</p>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$0</p>
              <p className="word">
                Take a leave to go to HDB branch office to get a rent reduction
              </p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day12Page;
