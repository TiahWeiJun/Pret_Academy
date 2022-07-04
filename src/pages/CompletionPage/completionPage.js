import React, { useContext } from "react";
import "./completionPage.css";
import image from "../../ImageList/Image101.jpeg";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const CompletionPage = () => {
  const { totalBalance } = useContext(AppContext);

  const Navigate = useNavigate();
  const nextPage = () => {
    Navigate("/contact", { replace: true });
  };

  return (
    <div className="mainDiv">
      <div className="firstLine">
        Congratulations on making it past 14 days with ${totalBalance} left!
      </div>
      <div className="secondLine">
        Do you think you could have survived till the end of the month?
      </div>
      <img src={image} alt="fireSpot" className="picture" />
      <div className="thirdLine">
        The choices u make in this game are based on real life experiences of
        women within the DOT community!
      </div>
      <div className="nextButton" onClick={nextPage}>
        Next
      </div>
    </div>
  );
};

export default CompletionPage;
