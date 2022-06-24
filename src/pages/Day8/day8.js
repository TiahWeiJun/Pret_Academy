import React, { useContext } from "react";
import "./day8.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Day8Page = (props) => {
  const Navigate = useNavigate()
  const greennextPage  = () => {
    Navigate('/consequence')
    // -80$
  }
  const pinknextPage  = () => {
    Navigate('/consequence')
    // -20$ 
  }
  
  return (
    <Layout>
      <p className="day8">
        <div className="question"><p id="situation">Situation: </p>  Your EZ-link is low on value and EZ-link is having a one-day promotion today. Get $100 in fare value by paying $80!</div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-e" onClick={greennextPage}>
          <div className="cost">-80$</div>
            <p id="g">Get the promotion</p>
          </div>
          <div className="pinkans-e" onClick={pinknextPage}>
            <div className="cost">-20$</div>
            <p id="p">Just top up what you need</p>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default Day8Page;
