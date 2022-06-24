import React, { useContext } from "react";
import "./day4.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Day4Page = (props) => {
  const Navigate = useNavigate()
  const greennextPage  = () => {
    Navigate('/consequence')
    // -20$
  }
  const pinknextPage  = () => {
    Navigate('/consequence')
    // -0$ 
  }
  
  return (
    <Layout>
      <p className="day4">
        <div className="question"><p id="situation">Situation: </p>  While you are at work, you receive a call from your husband  telling you that your daughter has a mild fever (37.8C) when returning home from school.</div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-f" onClick={greennextPage}>
          <div className="cost">-20$</div>
            <p id="g">Ask them to go to the doctor</p>
          </div>
          <div className="pinkans-f" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Ask them to stay at home</p>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default Day4Page;
