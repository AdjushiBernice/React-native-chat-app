import Image from 'next/image'
import React from 'react'
import successful from "../static/img/successful-man-3025713-2526911-1.png"
import successfully from "../static/img/successfully-done-5108472-4288033-1.png"
import wink from "../static/img/img/1531010992wink-emoji-woman-png-1.png"
import "../app/globals.css"
const Success = () => {
  return (
    <div className="box">
      <div className="confirmation">
        <div className="overLappy">
          <div className="congratulation">
            <div className="overlapGroup">
              <Image
                className="successfully-done"
                alt="Successfully done"
                src={successfully}
              />
              <Image className="successful-man" alt="Successful man" src={successful} />
            </div>
          </div>
          <div className="flexcontainer">
            <p className="texts">
              <span className="textWrapper">
                Congratulations
                <br />
              </span>
            </p>
            <p className="texts">
              <span className="textWrapper">you have successfully Registered!</span>
            </p>
          </div>
          <div className="divs">
            <p className="spanWrapper">
              <span className="spanning">
                Yes, it was easy and you did it!
                <br />
              </span>
            </p>
            <p className="spanWrapper">
              <span className="spanning">check your mail box for next step</span>
            </p>
          </div>
          <button className="registerButton">
            <div className="divWrapper">
              <div className="textWrapper2">Back</div>
            </div>
          </button>
          <div className="partnerAndSponsors" />
          <Image className="element-emoji" alt="Element emoji" src={wink} />
        </div>
      </div>
    </div>
  )
}

export default Success
