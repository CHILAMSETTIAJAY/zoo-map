import React from "react";
import "./homebody.css";
import pic from "../../../../assets/lion.jpg";
import trafficpic from "../../../../assets/traffic-removebg-preview.png";

const Homebody = () => {
  return (
    <div className="homebody-container">
      <div className="title">Zoo Gallary</div>
      <div className="pics-container">
        <div className="left-pic-con">
          <img src={pic} alt="" className="left-pic" />
        </div>
        <div className="right-pics-con">
          <img src={pic} alt="" className="right-pic" />
          <div className="more-pics">
            <img src={pic} alt="" className="right-pic" />
            <p className="moreno">+200</p>
          </div>
        </div>
      </div>
      <div className="title">Zoo Traffic</div>
      <img src={trafficpic} alt="" className="trafficpic" />
      <div className="sub-con">
        Want to take one day trip ticket &nbsp; <a href="#"> Click Here</a>
      </div>
    </div>
  );
};

export default Homebody;
