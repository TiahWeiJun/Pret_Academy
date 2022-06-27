import React, { useContext } from "react";
import "./consequencePage.css";
import { AppContext } from "../../App";

const ConsequencePage = () => {
  const { day, strikeTitle, message1, message2, message3, warning } =
    useContext(AppContext);

  return (
    <div className="background">
      <div className="solid">
        <div className="box">
          <p className="title">RESULT</p>
          <p className="strike">{strikeTitle}</p>
          <p className="message">{message1}</p>
          <p className="message">{message2}</p>
          <p className="message">{message3}</p>
          <p className="warning">{warning}</p>
          <div>
            <button type="button" className="nextbtn">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsequencePage;
