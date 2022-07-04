import React from "react";
import { useNavigate } from "react-router-dom";
import "./gameOverPage.css";

const GameOverPage = () => {
  const backToHome = () => {
    window.location.replace("/");
  };

  return (
    <div className="whole-screen">
      <div className="content">
        <p className="game-over">GAME OVER</p>
        <p className="msg">You have used up all your money before 14 days!</p>

        <div className="btn" onClick={backToHome}>
          Try Again!
        </div>
      </div>
    </div>
  );
};

export default GameOverPage;
