import React, { useContext } from "react";
import "./consequencePage.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const ConsequencePage = () => {
  const { day, setDay, strikeTitle, message1, message2, message3, warning } =
    useContext(AppContext);

  const Navigate = useNavigate();

  const nextPage = () => {
    if (day === 10) {
      Navigate(`/completion`, { replace: true });
    } else {
      Navigate(`/${day + 1}`, { replace: true });
      setDay((day) => day + 1);
    }
  };

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
            <button type="button" className="nextbtn" onClick={nextPage}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsequencePage;
