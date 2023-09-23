import React from "react";
import "../../app/globals.css"
import starl from "../../static/img/star-6.png"
import starlPu from "../../static/img/star-pu.png"
import vector3 from "../../static/img/vector-3.svg"
import vector1 from "../../static/img/vector.svg"
import lock from "../../static/img/08-1.png"
import Image from "next/image";


const Policy = () => {
  return (
    <div className="overlap-5">
      <p className="privacy-policy-and">
        <span className="span">
          Privacy Policy and <br />
        </span>
        <span className="text-wrapper-7">Terms</span>
      </p>
      <p className="below-are-our">
        Below are our privacy &amp; policy, which outline a lot of goodies.{" "}
        <br />
        it’s our aim to always take of our participant
      </p>
      <Image className="star-pu-6" alt="Star pu" src={starlPu} />
      <Image className="star-22" alt="Star" src={starl} />
      <Image className="star-23" alt="Star" src={starl} />
      <p className="text-wrapper-47">Last updated on September 12, 2023</p>
      <div className="rectangle-3" />
            <p className="at-getlinked-tech">
              At getlinked tech Hackathon 1.0, we value your privacy
              <br />
              and are committed to protecting your personal information.
              <br />
              This Privacy Policy outlines how we collect, use, disclose, <br />
              and safeguard your data when you participate in our tech <br />
              hackathon event. By participating in our event, you consent <br />
              to the practices described in this policy.
            </p>
            <div className="text-wrapper-36">Licensing Policy</div>

            <p className="text-wrapper-37">Here are terms of our Standard License:</p>

            <p className="the-standard-license">
              The Standard License grants you a non-exclusive right to
              <br />
              navigate and register for our event
            </p>
            <p className="you-are-licensed-to">
              You are licensed to use the item available at any free source
              <br />
              sites, for your project developement
            </p>
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Read More</div>
              </div>
            </button>

            <div className="list-terms">
              <Image className="vector-3" alt="Vector" src={vector3}/>
            </div>
            <div className="vector-wrapper">
              <Image className="vector-3" alt="Vector" src={vector3}/>
            </div>
            <Image className="vector-4" alt="Vector" src={vector1} />
            <Image className="element-6" alt="Element" src={lock}/>

    </div>
  );
};

export default Policy;
