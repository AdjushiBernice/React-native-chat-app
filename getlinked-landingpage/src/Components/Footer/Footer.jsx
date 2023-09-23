import React from "react";
import "../../app/globals.css";
import line14 from "../../static/img/line-20.svg";
import socials from "../../static/img/social-media.png";
import group from "../../static/img/group.png";
import vector2 from "../../static/img/vector-1.svg";
import sataGra from "../../static/img/sata-gra.png";
import star from "../../static/img/star.png";
import star5 from "../../static/img/star-5.png";
import purpleFlare1 from "../../static/img/purple-lens-flare-png-1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="overlap-5">
      <div className="footer-contents">
        <div className="rectangle-2" />

        <p className="div-2">
          <span className="span">get</span>
          <span className="text-wrapper-7">linked</span>
        </p>
        <div className="overlap-8">
          <Image className="line-14" alt="Line" src={line14} />
          <p className="terms-of-use-privacy">
            Terms of Use&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy
          </p>
        </div>
        <p className="getlinked-tech">
          Getlinked Tech Hackathon is a technology innovation program <br />
          established by a group of organizations with the aim of showcasing{" "}
          <br />
          young and talented individuals in the field of technology
        </p>
        <div className="overlap-9">
          <div className="useful-links-and">
            <div className="text-wrapper-27">Useful Links</div>
            <div className="text-wrapper-28">Contact Us</div>
            <div className="text-wrapper-29">Overview</div>
            <div className="text-wrapper-30">Timeline</div>
            <div className="text-wrapper-31">FAQs</div>
            <div className="text-wrapper-32">Register</div>
            <div className="text-wrapper-33">Follow us</div>
            <Image className="social-media" alt="Social media" src={socials} />
          </div>
          <p className="text-wrapper-35">
            All rights reserved. © getlinked Ltd.
          </p>

          <Image className="group" alt="Group" src={group} />
          <Image className="vector-2" alt="Vector" src={vector2} />
          <div className="element-alara-street-yaba">
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </div>
          <div className="text-wrapper-34">+234 679 81819</div>
        </div>
        <Image className="sata-gra-7" alt="Sata gra" src={sataGra} />
        <Image className="sata-gra-8" alt="Sata gra" src={sataGra} />
        <Image className="star-16" alt="Star" src={star5} />
        <Image className="star-17" alt="Star" src={star} />
        <Image className="star-18" alt="Star" src={star} />
        <Image className="star-19" alt="Star" src={star} />
        <Image className="star-20" alt="Star" src={star} />
        <Image className="star-21" alt="Star" src={star} />
        <Image
          className="purple-lens-flare-10"
          alt="Purple lens flare"
          src={purpleFlare1}
        />
      </div>
    </div>
  );
};

export default Footer;
