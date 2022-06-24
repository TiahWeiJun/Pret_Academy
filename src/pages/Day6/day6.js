import React, { useContext } from "react";
import "./day6.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Day6Page = (props) => {
  const Navigate = useNavigate()
  const greennextPage  = () => {
    Navigate('/consequence')
    // -100$
  }
  const pinknextPage  = () => {
    Navigate('/consequence')
    // -0$ 
  }
  
  return (
    <Layout>
      <p className="day6">
        <div className="question"><p id="situation">Situation: </p>  Your husband has diabetes and hypertension and has run out of his crucial medication but doesn’t have the $100 he needs to buy it.</div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-s" onClick={greennextPage}>
          <div className="cost">-100$</div>
            <p id="g">Buy it for him</p>
          </div>
          <div className="pinkans-s" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Say No</p>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default Day6Page;
