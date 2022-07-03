import React, { useContext } from "react";
import "../Day1/day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import healthyFood from "../../pic/healthy.png";
import unhealthy from "../../pic/unhealthy.png";
import { AppContext } from "../../App";

const Day3Page = (props) => {
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
    const newBalance = totalBalance - 350;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("");
    setMessage1("Healthy bodies start with healthy eating!");
    setMessage2("");
    setMessage3("");
    setWarning("");

    setPlayAlarm(false);
    Navigate("/consequence", { replace: true });
  };
  const pinknextPage = () => {
    const newBalance = totalBalance - 150;
    if (newBalance <= 0) {
      Navigate("/gameOver");
      setTotalBalance(newBalance);
      return;
    }

    setTotalBalance(newBalance);

    setStrikeTitle("Health Strike");
    setMessage1(
      "Your health is the most important and not having good health hinders your ability to work."
    );
    setMessage2(
      "A balanced diet is key to helping you and your family healthy. Foods that are high in preservatives may cost less, but taking it over an extended period of time could lead to malnutrition in your children and health issues in the future that could cost you even more!"
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
          <p id="situation">Situation: </p> You have run out of food at home and
          you need to go to the supermarket to replenish your fridge. The
          groceries you buy need to last you for a few weeks.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$350</p>
              <div id="g">
                <div>
                  <p className="gc">Healthy but Expensive</p>
                </div>
                <img
                  src={healthyFood}
                  className="healthy"
                  alt="healthyfood"
                  height="250px"
                  width="350px"
                ></img>
              </div>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$150</p>
              <div id="p">
                <div>
                  <p className="pc">Cheap but Unhealthy</p>
                </div>
                <img
                  src={unhealthy}
                  className="unhealthy"
                  alt="unhealthyfood"
                  height="250px"
                  width="350px"
                ></img>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Day3Page;
