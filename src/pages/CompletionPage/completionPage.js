
import React from "react";
import './completionPage.css'
import image from '../../ImageList/Image101.jpeg'
const completionPage = () => {


    return <div className="centraldiv">
        <center> <font size="5"> Congratulations on making it past 15 days!</font> </center>
        <center> <font size="5"> Do you think you could have survived till the end of the month? </font> </center>
        <img src={image} alt="fireSpot" />
        <center> <font size="5"> The choices u made in this game are based on real life experiences of women within the DOT community! </font> </center>
        <button type="button">Next Page!</button>



    </div>;
};

export default completionPage;
