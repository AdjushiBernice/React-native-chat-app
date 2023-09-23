import React from "react";
import NavBar from "../Components/NavBar/NavBar.Component";
import Image from "next/image";
import thumbsUp from "../static/img/img/3d-graphic-designer-showing-thumbs-up-png-1.png";
import sata1 from "../static/img/img/sata-gra.png";
import starPul from "../static/img/img/star-pu.png";
import sta from "../static/img/img/star.png";
import sta1 from "../static/img/img/star-1.png";
import vecto from "../static/img/img/vector-1.svg";
import processing from "../static/img/img/image-processing20200511-10310-13mnlsx.png";
import line9 from "../static/img/img/line-9.svg";
import element from "../static/img/img/1f6b6-2640.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Register = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [otherFields, setOtherFields] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    group_size: "",
    privacy_policy_accepted: false,
    category: "",
  });

  const router = useRouter();
  const baseUrl = " https://backend.getlinked.ai";
  useEffect(() => {
    fetch("{{baseUrl}}/hackathon/categories-list")
      .then((response) => response.json())
      .then((data) => {
        // Set the category data in state
        setCategoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform POST request with otherFields data
    fetch("{{baseUrl}}/hackathon/registration", {
      method: "POST",
      body: JSON.stringify(otherFields),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        console.log("Response from POST API:", data);
        // Redirect to a success page or perform any other action
        router.push("/success"); // Change to your success page route
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  return (
    <div>
      <div className="register-page">
        <div className="overlap-wrappery">
          <div className="overlaps">
            <NavBar />
            <Image
              className="element-graphic-designer"
              alt="Element graphic designer"
              src={thumbsUp}
            />
            <Image className="sata-gra" alt="Sata gra" src={sata1} />
            <Image className="star-pu" alt="Star pu" src={starPul} />
            <Image className="star" alt="Star" src={sta} />
            <Image className="star-2" alt="Star" src={sta1} />
            <Image className="star-3" alt="Star" src={sta} />
            <div className="register-form">
              <div className="text-wrapper6">Register</div>
              <p className="p">
                Please review your registration details before submitting
              </p>
              <form onSubmit={handleSubmit}>
                <div className="group-name">
                  <div className="div-wrappery">
                    <input
                    placeholder="Enter your teams name"
                      className="text-wrapper7"
                      type="text"
                      value={otherFields.team_name}
                      
                      onChange={(e) =>
                        setOtherFields({
                          ...otherFields,
                          team_name: e.target.value,
                        })
                      }
                    />
                      
                    
                  </div>
                  <p className="text-wrapper-8">Team’s Name</p>
                </div>
                <div className="email">
                  <div className="div-wrappery">
                    <div className="text-wrapper7">
                      Enter your email address
                    </div>
                  </div>
                  <div className="text-wrapper-8">Email</div>
                </div>
                <div className="category">
                  <div className="div-wrappery">
                    <div className="select-dropdown">
                      <div className="text-wrapper-9">Select your category</div>
                      <Image className="vector" alt="Vector" src={vecto} />
                    </div>
                  </div>
                  <div className="text-wrapper-8">Category</div>
                </div>
                <div className="phone">
                  <div className="div-wrappery">
                    <div className="text-wrapper7">Enter your phone number</div>
                  </div>
                  <div className="text-wrapper-8">Phone</div>
                </div>
                <div className="project-topic">
                  <div className="div-wrappery">
                    <p className="text-wrapper-10">
                      What is your group project topic
                    </p>
                  </div>
                  <div className="text-wrapper-8">Project Topic</div>
                </div>
                <div className="text-wrapper-11">CREATE YOUR ACCOUNT</div>
                <div className="overlap-group-wrappery">
                  <div className="overlap-2">
                    <button className="text-wrapper-12">Register Now</button>
                  </div>
                </div>
                <div className="part-of-move">
                  <p className="text-wrapper-13">Be part of this movement!</p>
                  <div className="overlap-3">
                    <Image className="image" alt="Image" src={processing} />
                    <Image className="element" alt="Element" src={element} />
                  </div>
                  <Image className="liny" alt="Line" src={line9} />
                </div>
                <div className="group-siize">
                  <div className="div-wrappery">
                    <div className="select-dropdown-2">
                      <div className="text-wrapper-9">Select</div>
                      <Image className="vector-2" alt="Vector" src={vecto} />
                    </div>
                  </div>
                  <div className="text-wrapper-8">Group Size</div>
                </div>
                <div className="agree-button">
                  <p className="i-agreed-with-the">
                    I agreed with the event terms and conditions&nbsp;&nbsp;and
                    privacy policy
                  </p>
                  <div className="rectangle-2" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
