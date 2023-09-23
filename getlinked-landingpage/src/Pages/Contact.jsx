import React from 'react'
import NavBar from '../Components/NavBar/NavBar.Component'
import Image from 'next/image'
import "../app/globals.css"
import media from "../static/img/social-media.png"
import starOutline from "../static/img/star-outlin.png"
import staPu from "../static/img/star-pu.png"
import star2 from "../static/img/img/star-1.png"
import gra from "../static/img/sata-gra.png"
import sta from "../static/img/star.png"

const Contact = () => {
  return (
    <div >
        <NavBar />
        <div className="contact-page">
        <div className="over-lap-wrapper">
        <div className="over-lap">
          <div className="over-lap-group">

          <div className="contact-information">
              Contact
              <br />
              Information
            </div>
            <div className="element-alara-street-yaba">
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </div>
            <div className="text-wrapper-6">Call Us : 07067981819</div>
            <p className="we-are-open-from">
              we are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </p>
            <div className="text-wrapper-7">Share on</div>
            <div className="text-wrapper-8">Get in touch</div>
            <div className="contact-bar">
              <div className="overlap-2">
                <div className="overlap-3">
                  <div className="text-wrapper-9">First Name</div>
                </div>
                <div className="overlap-4">
                  <div className="text-wrapper-9">Mail</div>
                </div>
                <div className="overlap-5">
                  <div className="text-wrapper-10">Message</div>
                </div>
                <div className="do-you-have">
                  <div className="text-wrapper-11">Questions or need assistance?</div>
                  <div className="let-us-know-about-it">Let us know&nbsp;&nbsp;about it!</div>
                </div>
                <button className="overlap-group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-12">Submit</div>
                  </div>
                </button>
              </div>
            </div>
            <Image className="social-media" alt="Social media" src={media}/>
            <Image className="sata-gra" alt="Sata gra" src={gra} />
            <Image className="star-pu" alt="Star pu" src={staPu} />
            <Image className="star-outlin" alt="Star outlin" src={starOutline} />
            <Image className="star-outlin-2" alt="Star outlin" src={starOutline} />
            <Image className="star" alt="Star" src={sta} />
          </div>
          <Image className="star-2" alt="Star" src={star2} />
      </div>
      </div>
      </div>

    </div>
  )
}

export default Contact