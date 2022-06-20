import React, { useContext } from "react";
import "./layout.css";
import { AppContext } from "./App";

const Layout = ({ children }) => {
  const {
    day,
    totalBalance,
    familyStrike,
    healthStrike,
    workStrike,
    socialStrike,
  } = useContext(AppContext);
  return (
    <div className="layoutContainer">
      <div className="leftBar">
        <p>Strikes</p>
        <p>{totalBalance}</p>
      </div>
      <div className="mainBar">{children}</div>

      <div className="rightBar">
        <p>Days</p>
        <p>Timer</p>
      </div>
    </div>
  );
};

export default Layout;
