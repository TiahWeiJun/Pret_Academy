import React from "react";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
    <div className="leftBar">
        <b><div>Balance</div></b>
        
        <div className="size"><b><span><span className="dollar">$</span>600</span> </b></div>
    
        <div className="bottom"></div>    
        <b><div>Strikes</div></b>
        <span className="spacing">Family(1)</span>
        <span className="spacing">Health(1)</span>
         <span className="spacing">Work(1)</span>
         <span className="spacing">Social(1)</span> 
       
      </div>
    
       
      <div className="mainBar">{children}</div>


      <div className="rightBar">
        <b><p>Days</p></b>
        <span>10days</span>
        <div className="down"></div>
        <b><p>Timer</p></b>
        <span>20seconds</span>
      </div>
    </div>
  );
};

export default Layout;
