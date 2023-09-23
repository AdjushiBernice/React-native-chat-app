import React from "react";
import star12 from "../../static/img/star-6.png";
import star13 from "../../static/img/star-10.png";
import sataGra6 from "../../static/img/sata-gra-2.png";
import premium from "../../static/img/premium-photo-1664443577580-dd2674e9d359-1.png";
import element6 from "../../static/img/9486889-1.png";
import silver from "../../static/img/silver-medal-1.png";
import bronze from "../../static/img/bronze-medal-1.png";
import gold from "../../static/img/gold-medal-1.png";
import purpleLens6 from "../../static/img/purple-lens-flare-png-6.png";

import "../../app/globals.css";
import Image from "next/image";

const Prize = () => {
  return (
    <div className="testimonials">
      <div className="overlap-7">
        <Image
          className="purple-lens-flare-7"
          alt="Purple lens flare"
          src={purpleLens6}
        />
        <p className="highlight-of-the">
          Highlight of the prizes or rewards for winners and
          <br />
          for participants.
        </p>
        <Image className="star-12" alt="Star" src={star12} />
        <Image className="star-13" alt="Star" src={star13} />
        <Image className="star-14" alt="Star" src={star13} />
        <Image className="sata-gra-6" alt="Sata gra" src={sataGra6} />
        <Image className="premium-photo" alt="Premium " src={premium} />
        <p className="prizes-and-rewards">
          <span className="span">
            Prizes and <br />
          </span>
          <span className="text-wrapper-7">Rewards</span>
        </p>
        <Image className="element-5" alt="" src={element6} />
        <Image className="star-15" alt="Star" src={star12} />
        <div className="rewards">
          <div className="overlap-10">
            <div className="element-position">
              <div className="overlap-group-2">
                <div className="rectangle-4" />
                <Image className="silver-medal" alt="Silver medal" src={silver} />
                <div className="text-wrapper-38">2nd</div>
                <div className="text-wrapper-39">Runner</div>
                <div className="text-wrapper-40">N300,000</div>
              </div>
            </div>
            <div className="element-rd-position">
              <div className="overlap-11">
                <div className="rectangle-5" />
                <Image className="bronze-medal" alt="Bronze medal" src={bronze} />
                <div className="text-wrapper-41">3rd</div>
                <div className="text-wrapper-42">Runner</div>
                <div className="text-wrapper-43">N150,000</div>
              </div>
            </div>
            <div className="element-st-position">
              <div className="overlap-12">
                <div className="rectangle-6" />
                <Image className="gold-medal" alt="Gold medal" src={gold} />
                <div className="text-wrapper-44">1st</div>
                <div className="text-wrapper-45">Runner</div>
                <div className="text-wrapper-46">N400,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prize;
