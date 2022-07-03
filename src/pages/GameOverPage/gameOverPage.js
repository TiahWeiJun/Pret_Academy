import React from "react";
import { useNavigate } from "react-router-dom";
import "./gameOverPage.css";

const GameOverPage = () => {
  const backToHome = () => {
    window.location.replace("/");
  };

  return (
    <div className="whole-screen">
      <div className="gameover-center">
        <h1 className="title"> Game over</h1>
        <p className="paragraph">
          You have run out of money! You should try again
        </p>
        <div className="button" onClick={backToHome}>
          Try again
        </div>
      </div>
    </div>
  );
};

export default GameOverPage;
