import React from "react";
import "../../app/globals.css";
import purpleLens3 from "../../static/img/purple-lens-flare-png-3.png";
import winwise from "../../static/img/winwise-logo-white-colour-1.png";
import wisperLogo from "../../static/img/wisper-logo-white.png";
import purpleLens2 from "../../static/img/purple-lens-flare-png-2.png";
import libertyLogo from "../../static/img/liberty-company-logo-white-colour.png";
import libertyCompany from "../../static/img/liberty-company-logo-white.png";
import line7 from "../../static/img/line-12.svg";
import line10 from "../../static/img/line-13.svg";
import line12 from "../../static/img/line-14.svg";
import line11 from "../../static/img/line-16.svg";
import line13 from "../../static/img/line-17.svg";
import line8 from "../../static/img/line-18.svg";
import line9 from "../../static/img/line-19.svg";
import purpleLens7 from "../../static/img/purple-lens-flare-png-7.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="overlap-5">
      <div className="overlap-6">
        <div className="text-wrapper-22">Partners and Sponsors</div>
        <p className="getlinked-hackathon">
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
        <Image
          className="purple-lens-flare-6"
          alt="Purple lens flare"
          src={purpleLens7}
        />
       

        <Image
          className="purple-lens-flare-8"
          alt="Purple lens flare"
          src={purpleLens3}
        />
        <Image
          className="purple-lens-flare-9"
          alt="Purple lens flare"
          src={purpleLens2}
        />
        <div className="partner-and-sponsors">
          <div className="partner-and-sponsors-2">
            <Image
              className="wisper-logo-white"
              alt="Wisper logo white"
              src={wisperLogo}
            />
            <Image
              className="liberty-company-logo"
              alt="Liberty company logo"
              src={libertyLogo}
            />
            <Image
              className="liberty-company-logo-2"
              alt="Liberty company logo"
              src={libertyCompany}
            />
            <Image className="line-7" alt="Line" src={line7} />
            <Image className="line-8" alt="Line" src={line8} />
            <Image className="line-9" alt="Line" src={line9} />
            <Image className="line-10" alt="Line" src={line10} />
            <Image className="line-11" alt="Line" src={line11} />
            <Image className="line-12" alt="Line" src={line12} />
            <Image className="line-13" alt="Line" src={line13} />
            <Image
              className="winwise-logo-white"
              alt="Winwise logo white"
              src={winwise}
            />
            <p className="paybox">
              <span className="span">Pay</span>
              <span className="text-wrapper-23">box</span>
            </p>
            <div className="vizual-plus">
              <p className="vuzual-plus">
                <span className="span">Vuzual </span>
                <span className="text-wrapper-24">Plus </span>
                <span className="text-wrapper-25">&nbsp;</span>
              </p>
              <div className="text-wrapper-26">Design Studios</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
