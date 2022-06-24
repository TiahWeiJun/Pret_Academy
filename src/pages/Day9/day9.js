import React, { useContext } from "react";
import "./day9.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Day9Page = (props) => {
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
      <p className="day9">
        <div className="question"><p id="situation">Situation: </p>  Your prepaid card is out of credits</div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-n" onClick={greennextPage}>
          <div className="cost">-20$</div>
            <p id="g">Top up to stay connected</p>
          </div>
          <div className="pinkans-n" onClick={pinknextPage}>
            <div className="cost">-0$</div>
            <p id="p">Be uncontactable</p>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default Day9Page;
