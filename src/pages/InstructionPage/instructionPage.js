import React from "react";
import { useNavigate } from "react-router-dom";
import "./instructionPage.css";

const InstructionPage = () => {
  const Navigate = useNavigate();
  const nextPage = () => {
    Navigate("/persona");
  };

  return (
    <div className="InstructionWhole">
      <div className="instructionTitle">INSTRUCTIONS</div>
      <div className="instructionMessages">
        1) You will take on a persona for this online poverty sensitisation
        session
      </div>
      <div className="instructionMessages">
        2) Pick either the <span style={{ color: "green" }}>"green"</span> or{" "}
        <span style={{ color: "red" }}>"red" </span>reaction button
        corresponding to your option
      </div>
      <div className="instructionMessages">
        3) You must bear the consequences of your decision
      </div>

      <div className="btnCont">
        <div className="buttonInstruction" onClick={nextPage}>
          Next
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
