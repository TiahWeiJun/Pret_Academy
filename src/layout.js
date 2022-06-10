import React from "react";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <div className="leftBar">
        <p>Strikes</p>
        <p>Balance</p>
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
