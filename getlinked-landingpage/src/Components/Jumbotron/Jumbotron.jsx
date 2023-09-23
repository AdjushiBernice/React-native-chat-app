import React from "react";
import "../../app/globals.css";
import manSmart from "../../static/img/man-wearing-smart-glasses-touching-virtual-screen-1.png";
import creative1 from "../../static/img/creative-1.png";
import chain from "../../static/img/chain-9365116-7621444.png";
import element from "../../static/img/1f-4a-5.png";
import image from "../../static/img/image-1.png";
import vector from "../../static/img/vector-4.svg";
import star10 from "../../static/img/star-10.png"
import star5 from "../../static/img/star-5.png"
import Image from "next/image";

const Jumbotron = () => {
  return (
    <div>
      <p className="text-wrapper-17">Igniting a Revolution in HR Innovation</p>
      <Image className="vector" alt="Vector" src={vector} />
      <Image className="star" alt="Star" src={star10} />
      <Image className="star-2" alt="Star" src={star5} />
      <Image className="star-3" alt="Star" src={star5} />

      <Image
        className="man-wearing-smart"
        alt="Man wearing smart"
        src={manSmart}
      />
      <p className="participate-in">
        Participate in getlinked tech Hackathon 2023 stand <br />a chance to win
        a Big prize
      </p>
      <div className="title">
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="text-wrapper-8">getlinked Tech</div>
            <p className="hackathon">
              <span className="span">Hackathon </span>
              <span className="text-wrapper-7">1.0</span>
            </p>
            <Image className="creative" alt="Creative" src={creative1} />
          </div>
          <Image className="chain" alt="Chain" src={chain} />
        </div>
        <Image className="element" alt="Element" src={element} />
      </div>
      <Image className="image" alt="" src={image} />
      <button className="register-button">
        <div className="div-wrapper">
          <div className="text-wrapper">Register</div>
        </div>
      </button>
      <div className="countdown-time">
        <div className="overlap-4">
          <div className="element-2">00&nbsp;&nbsp; 00&nbsp;&nbsp; 00</div>
          <div className="text-wrapper-9">H</div>
          <div className="text-wrapper-10">M</div>
          <div className="text-wrapper-11">S</div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
