import React, { useContext, useEffect, useState } from "react";
import "./layout.css";
import { AppContext } from "./App";
import { useTimer } from "use-timer";
import ReactAudioPlayer from "react-audio-player";
import alarm from "./sounds/alarm.mp3";

const Layout = ({ children, leftChoice, rightChoice }) => {
  const {
    day,
    totalBalance,
    familyStrike,
    healthStrike,
    workStrike,
    socialStrike,
    setPlayAlarm,
    playAlarm,
  } = useContext(AppContext);

  const [timerClass, setTimerClass] = useState("timer");

  const { time, start } = useTimer({
    initialTime: 20,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeUpdate: (time) => {
      if (time === 10) {
        setTimerClass("timerAnimate");
        setPlayAlarm(true);
      }
    },
    onTimeOver: () => {
      setTimerClass("timer");
      setPlayAlarm(false);
      if (Math.floor(Math.random() * 2) === 1) {
        leftChoice();
      } else {
        rightChoice();
      }
    },
  });

  useEffect(() => {
    start();
  }, []);

  return (
    <div className="layoutContainer">
      {playAlarm && <ReactAudioPlayer src={alarm} autoPlay loop />}

      <div className="leftBar">
        <div className="size">
          <div className="balance">BALANCE</div>
          <hr className="under" />
          <p className="amount">
            <span className="dollar">$</span>
            {totalBalance}
          </p>
        </div>

        <div className="strikeContainer">
          <div className="strikeDiv">
            <span>Family Strikes</span>
            {familyStrike === 0 ? (
              <p style={{ fontSize: "25px" }}>{familyStrike}</p>
            ) : (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "25px" }}>
                {familyStrike}
              </p>
            )}
          </div>

          <div className="strikeDiv">
            <span>Health Strikes</span>
            {healthStrike === 0 ? (
              <p style={{ fontSize: "25px" }}>{healthStrike}</p>
            ) : (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "25px" }}>
                {healthStrike}
              </p>
            )}
          </div>
          <div className="strikeDiv">
            <span>Work Strikes</span>
            {workStrike === 0 ? (
              <p style={{ fontSize: "25px" }}>{workStrike}</p>
            ) : (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "25px" }}>
                {workStrike}
              </p>
            )}
          </div>
          <div className="strikeDiv">
            <span>Social Strikes</span>
            {socialStrike === 0 ? (
              <p style={{ fontSize: "25px" }}>{socialStrike}</p>
            ) : (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "25px" }}>
                {socialStrike}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mainBar">
        <div className="dayRow">
          <h1>DAY {day}</h1>
        </div>
        {children}
      </div>

      <div className="rightBar">
        <div className={timerClass}>
          <span className="timerNum">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
