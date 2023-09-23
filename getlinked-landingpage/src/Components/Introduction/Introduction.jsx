import React from "react";
import "../../app/globals.css"
import purple7 from "../../static/img/purple-lens-flare-png-7.png"
import purple6 from "../../static/img/purple-lens-flare-png-6.png"
import arrow from "../../static/img/arrow.png"
import sataGra from "../../static/img/sata-gra-2.png"
import starPu from "../../static/img/star-pu-1.png"
import Image from "next/image";

const Introduction = () => {
  return (
    <div>
      <div className="rectangle" />
      <Image
        className="purple-lens-flare-2"
        alt="Purple lens flare"
        src={purple7}
      />
      <Image
        className="purple-lens-flare-3"
        alt="Purple lens flare"
        src={purple6}
      />
      <p className="introduction-to">
        <span className="span">
          Introduction to getlinked
          <br />
        </span>
        <span className="text-wrapper-7">tech Hackathon 1.0</span>
      </p>
      <div className="the-big-idea">
              <div className="the-big-idea-wrapper">
                <div className="the-big-idea-2">
                  The Big
                  <br />
                  Idea!
                </div>
              </div>
            </div>
            <p className="our-tech-hackathon">
              Our tech hackathon is a melting pot of visionaries, and its purpose is as
              <br />
              clear as day: to shape the future. Whether you&#39;re a coding genius, a <br />
              design maverick, or a concept wizard, you&#39;ll have the chance to transform <br />
              your ideas into reality. Solving real-world problems, pushing the boundaries
              <br />
              of technology, and creating solutions that can change the world,
              <br />
              that&#39;s what we&#39;re all about!
            </p>
            <Image className="arrow" alt="Arrow" src={arrow} />
            <Image className="sata-gra" alt="Sata gra" src={sataGra} />
            <Image className="star-pu" alt="Star pu" src={starPu} />

    </div>
  );
};

export default Introduction;
