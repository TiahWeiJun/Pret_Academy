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
    Navigate("/consequence");
    // -350$ Healthy bodies start with healthy eating!
  };
  const pinknextPage = () => {
    Navigate("/consequence");
    // -150$ "Health Strike
    // Your health is the most important and not having good health hinders your ability to work.
    //
    // A balanced diet is key to helping you and your family healthy. Foods that are high in preservatives may cost less, but taking it over an extended period of time could lead to malnutrition in your children and health issues in the future that could cost you even more!"
  };

  return (
    <Layout>
      <div className="day1">
        <div className="question">
          <p id="situation">Situation: </p> You have run out of food at home and
          you need to go to the supermarket to replenish your fridge. The
          groceries you buy need to last you for a few weeks.
        </div>
        <div className="centerdiv">
          <div className="greenans-one" onClick={greennextPage}>
            <button type="button" className="greenbtn">
              <p className="greenchoice">-$10</p>
              <div id="g">
                <div>
                  <p className="gc">Healthy but Expensive option </p>
                </div>
                <img
                  src={healthyFood}
                  className="healthy"
                  alt="healthyfood"
                  height="300px"
                  width="400px"
                ></img>
              </div>
            </button>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <button type="button" className="redbtn">
              <p className="redchoice">-$2</p>
              <div id="p">
                <div>
                  <p className="pc">Cheap but Unhealthy option </p>
                </div>
                <img
                  src={unhealthy}
                  className="unhealthy"
                  alt="unhealthyfood"
                  height="300px"
                  width="400px"
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
