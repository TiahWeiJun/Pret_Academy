import React from "react";
import './homepage.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
<<<<<<< HEAD
  return <div>HomePag123e</div>;
=======
  const Navigate = useNavigate()
  const nextPage  = () => {
    Navigate('/1')
  }


  return <div className="centraldiv">
          <div className="spacearounddiv">
            <div className="introtext" id="gamename">THIS IS MY EXPERIENCE</div>
            <div className="babydiv">
              <div className="introtext" id="background">back ground information</div>
              <ul>
              <li>42 year old women</li>
              <li>GCE N level</li>
              <li>Two children</li>
              <li>13 year old son</li>
              <li>8 year old daughter</li>
              <li className="uncomfortableli">44 years old husband was a driver but temporarily unable to work because of mobility and health conditions</li>
              <li>Minimal work experience due to care-giving responsibilities</li>
              <li>Last did part time before daughter was born 8 years ago</li>
              <li>Family only has $600 of saving left</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="buttonspace" onClick={nextPage}>
                <p className="startbutton">Accept the challenge</p>
            </div>
          </div>
        </div>;
>>>>>>> e460d0a2e2a18eaccdba88de8402f8c2e8f3f637
};

export default HomePage;
