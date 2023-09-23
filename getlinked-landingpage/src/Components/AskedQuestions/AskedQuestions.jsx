import React from "react";
import "../../app/globals.css";
import cwok from "../../static/img/cwok-casual-21-1.png";
import starPu3 from "../../static/img/star-pu-1.png";
import line4 from "../../static/img/line-10.svg";
import star9 from "../../static/img/star-6.png"
import Image from "next/image";

const AskedQuestions = () => {
  return (
    <div>
      <p className="frequently-ask">
        <span className="span">
          Frequently Ask
          <br />
        </span>
        <span className="text-wrapper-7">Question</span>
      </p>
      <Image className="cwok-casual" alt="Cwok casual" src={cwok} />

      <p className="we-got-answers-to">
        <span className="text-wrapper-18">
          We got answers to the questions that you might
          <br />
          want to ask about{" "}
        </span>
        <span className="text-wrapper-19">getlinked Hackathon 1.0</span>
      </p>
      <Image className="star-pu-3" alt="Star pu" src={starPu3} />
      <div className="question-of-FAQ">
        <p className="text-wrapper-20">
          Can I work on a project I started before the hackathon?
        </p>
        <Image className="line-4" alt="Line" src={line4} />
        <div className="text-wrapper-21">+</div>
      </div>
      <div className="question-of-FAQ-2">
        <p className="text-wrapper-20">
          What happens if I need help during the hackathon?
        </p>
        <Image className="line-4" alt="Line" src={line4} />
        <div className="text-wrapper-21">+</div>
      </div>
      <div className="question-of-FAQ-3">
        <p className="text-wrapper-20">
          What happens if I don&#39;t have an idea for a project?
        </p>
        <Image className="line-4" alt="Line" src={line4} />
        <div className="text-wrapper-21">+</div>
      </div>
      <div className="question-of-FAQ-4">
        <p className="text-wrapper-20">
          Can I join a team or do I have to come with one?
        </p>
        <Image className="line-4" alt="Line" src={line4} />
        <div className="text-wrapper-21">+</div>
      </div>
      <div className="question-of-FAQ-5">
        <p className="text-wrapper-20">What happens after the hackathon ends</p>
        <Image className="line-4" alt="Line" src={line4} />
        <div className="text-wrapper-21">+</div>
      </div>
      <div className="question-of-FAQ-6">
        <p className="text-wrapper-20">
          Can I work on a project I started before the hackathon?
        </p>
        <Image className="line-4" alt="Line" src={line4} />
        <div className="text-wrapper-21">+</div>
      </div>
      <Image className="star-9" alt="Star" src={star9}/>
      <div className="text-wrapper-14">?</div>
      <div className="text-wrapper-15">?</div>
      <div className="text-wrapper-16">?</div>
    </div>
  );
};
export default AskedQuestions;
