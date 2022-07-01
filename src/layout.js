import React, { useContext, useEffect, useState } from "react";
import "./layout.css";
import { AppContext } from "./App";
import { useTimer } from "use-timer";
import ReactAudioPlayer from "react-audio-player";
import useSound from "use-sound";
import alarm from "./sounds/alarm.mp3";

const Layout = ({ children }) => {
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
            <p>{familyStrike}</p>
          </div>

          <div className="strikeDiv">
            <span>Health Strikes</span>
            <p>{healthStrike}</p>
          </div>
          <div className="strikeDiv">
            <span>Work Strikes</span>
            <p>{workStrike}</p>
          </div>
          <div className="strikeDiv">
            <span>Social Strikes</span>
            <p>{socialStrike}</p>
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
