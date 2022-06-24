import React, { useContext } from "react";
import "./day7.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Day7Page = (props) => {
  const Navigate = useNavigate()
  const greennextPage  = () => {
    Navigate('/consequence')
    // -30$
  }
  const pinknextPage  = () => {
    Navigate('/consequence')
    // -0$ 
  }
  
  return (
    <Layout>
      <p className="day7">
        <div className="question"><p id="situation">Situation: </p>  Your daughter's school is organising a trip to Universal studios but you would need to pay $30.</div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-sev" onClick={greennextPage}>
          <div className="cost">-30$</div>
            <p id="g">Pay $30</p>
          </div>
          <div className="pinkans-sev" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Don’t pay and keep your child in studentcare that day</p>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default Day7Page;
