import React, { useContext } from "react";
import "./day3.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import healthyFood from '../../pic/healthy.png'
import unhealthy from "../../pic/unhealthy.png"

const Day3Page = (props) => {
  const Navigate = useNavigate()
  const greennextPage  = () => {
    Navigate('/consequence')
    // -350$ Healthy bodies start with healthy eating!
  }
  const pinknextPage  = () => {
    Navigate('/consequence')
     // -150$ "Health Strike
// Your health is the most important and not having good health hinders your ability to work.
//  
// A balanced diet is key to helping you and your family healthy. Foods that are high in preservatives may cost less, but taking it over an extended period of time could lead to malnutrition in your children and health issues in the future that could cost you even more!"
  }
  
  return (
    <Layout>
      <p className="day3">
        <div className="question"><p id="situation">Situation: </p>  You have run out of food at home and you need to go to the supermarket to replenish your fridge. The groceries you buy need to last you for a few weeks.</div>
      </p>
      <div className="centraldiv">
        <div className="ans">
          <div className="greenans-t" onClick={greennextPage}>
            <div className="cost">-350$</div>
              <div id="gd"><div><p className="gc">Healthier option </p><p>$350 Buys your family:</p>
                  Eggs
                  Vegetables
                  Brown Rice
                  Oats
                  Fresh Milk
                  Fruits
                  Frozen Seafood
                  Fresh Produce</div><img src={healthyFood} className="healthy" alt="healthyfood"></img></div>
            </div>
            <div className="pinkans-t" onClick={pinknextPage}>
              <div className="cost">-150$</div>
              <div id="pd"><div><p className="pc">cheaper option </p><p>$150 Buys your family:</p>
                Canned Foods (e.g. Baked Beans/ Corn)
                Processed Food (e.g. Hot Dog)
                Instant Noodles
                White Rice
                Mega Loaf of Bread
                UHT Milk
                Biscuits
                Sweet Cordial
                Eggs</div><img src={unhealthy} className="unhealthy" alt="unhealthyfood"></img></div></div>
            </div>
        </div>
    </Layout>
  );
};

export default Day3Page;
