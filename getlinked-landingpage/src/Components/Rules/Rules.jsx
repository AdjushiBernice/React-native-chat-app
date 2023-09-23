import React from "react";
import "../../app/globals.css"
import stars from "../../static/img/star-10.png"
import stars2 from "../../static/img/star-6.png"
import spec from "../../static/img/7450159-1.png"
import Image from "next/image";
const Rules = () => {
  return (
    <div>
      <p className="rules-and-guidelines">
        <span className="span">
          Rules and
          <br />
        </span>
        <span className="text-wrapper-7">Guidelines</span>
      </p>
      <p className="our-tech-hackathon-2">
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
            <Image className="star" alt="Star" src={stars} />
            <Image className="star-2" alt="Star" src={stars2} />
            <Image className="element-3" alt="Element" src={spec}/>

    </div>
  );
};

export default Rules;
