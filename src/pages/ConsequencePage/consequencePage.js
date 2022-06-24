import React from "react";
import "./consequencePage.css";

const ConsequencePage = () => {
  return (
    <div className="background">
      <div className="solid">
        <p className="title">RESULT</p>
        <p className="strike">Health Strike</p>
        <p className="second">
          Your health is the most important and not having good health hinders
          your ability to work.
        </p>
        <p className="last">
          A balanced diet is key to helping you and your family healthy. Foods
          that are high in preservatives may cost less, but taking it over an
          extended period of time could lead to malnutrition in your children
          and health issues in the future that could cost you even more!
        </p>
        <p className="warning">
          Getting 3 Family Strikes will earn you a visit from a concerned social
          worker as you are deemed as not being able to care for your children
          in the best possible way. The stress from being seen as an incompetent
          mother and worry about your children being taken from you earns you a
          Health Strike as well.
        </p>
        <div>
          <button type="button" className="nextbtn">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsequencePage;
