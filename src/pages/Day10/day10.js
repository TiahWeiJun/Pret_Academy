import React, { useContext } from "react";
import "./day10.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Day10Page = (props) => {
  const Navigate = useNavigate()
  const greennextPage  = () => {
    Navigate('/consequence')
    // -10$
  }
  const pinknextPage  = () => {
    Navigate('/consequence')
    // -2$ 
  }
  
  return (
    <Layout>
      <p className="day10">
        <div className="question"><p id="situation">Situation: </p>  Some of son's friends are going to Wild Wild Wet as a reward for doing well on their mid year exams.  However, the entrance fee is $24. </div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-t" onClick={greennextPage}>
          <div className="cost">-24$</div>
            <p id="g">Give your son the money to go</p>
          </div>
          <div className="pinkans-t" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Tell him no</p>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default Day10Page;
