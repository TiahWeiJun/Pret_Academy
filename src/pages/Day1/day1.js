import React, { useContext } from "react";
import "./day1.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Day1Page = (props) => {
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
      <p className="day1">
        <div className="question"><p id="situation">Situation: </p>  It’s your first day of work and your children were not co-operative causing you to be running late after dropping them off at school.</div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-one" onClick={greennextPage}>
          <div className="cost">-10$</div>
            <p id="g">Take a Grab to get to work on time</p>
          </div>
          <div className="pinkans-one" onClick={pinknextPage}>
            <div className="cost">-2$</div>
            <p id="p">Take the bus and be 30mins late</p>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default Day1Page;
