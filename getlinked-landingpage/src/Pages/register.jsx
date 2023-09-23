import React from "react";
import NavBar from "../Components/NavBar/NavBar.Component";
import Image from "next/image";
import thumbsUp from "../static/img/3d-graphic-designer-showing-thumbs-up-png-1.png";
import sata1 from "../static/img/sata-gra.png";
import starPul from "../static/img/star-pu.png";
import sta from "../static/img/star.png";
import sta1 from "../static/img/star-1.png";
import processing from "../static/img/image-processing20200511-10310-13mnlsx.png";
import line9 from "../static/img/line-9.svg";
import element from "../static/img/1f6b6-2640.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [otherFields, setOtherFields] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    group_size: 0,
    privacy_policy_accepted: false,
    category: 0,
  });
  const groupSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const router = useRouter();
  const baseUrl = "https://backend.getlinked.ai";

  useEffect(() => {
    fetch(`${baseUrl}/hackathon/categories-list`)
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
    console.log("Submit btn clicked");
    // Perform POST request with otherFields data
    fetch(`${baseUrl}/hackathon/registration`, {
      method: "POST",
      body: JSON.stringify(otherFields),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        // Redirect to a success page or perform any other action
        response.ok && router.push("/Success");
      })
      .then((data) => {
        // Handle the response data as needed
        console.log("Response from POST API:", data);
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
                <label className="group-name">
                  <input
                    required
                    className="div-wrappery"
                    placeholder="Enter your teams name"
                    type="text"
                    value={otherFields.team_name}
                    onChange={(e) =>
                      setOtherFields({
                        ...otherFields,
                        team_name: e.target.value,
                      })
                    }
                  />
                  <p className="text-wrapper-8">Team’s Name</p>
                </label>

                <label className="email">
                  <input
                    required
                    type="email"
                    className="div-wrappery"
                    placeholder="Enter your email address"
                    onChange={(e) =>
                      setOtherFields({
                        ...otherFields,
                        email: e.target.value,
                      })
                    }
                  />
                  <p className="text-wrapper-8">Email</p>
                </label>

                <label className="category">
                  <select
                    name=""
                    id=""
                    className="div-wrappery"
                    onChange={(e) =>
                      setOtherFields({
                        ...otherFields,
                        category: categoryData.find(
                          (data) => data.name === e.target.value
                        ).id,
                      })
                    }
                  >
                    <option value="">Select your category</option>
                    {categoryData.map((data, index) => (
                      <option key={index}>{data.name}</option>
                    ))}
                  </select>
                  <p className="text-wrapper-8">Category</p>
                </label>

                <label className="phone">
                  <input
                    required
                    type="tel"
                    className="div-wrappery"
                    placeholder="Enter your phone number"
                    onChange={(e) =>
                      setOtherFields({
                        ...otherFields,
                        phone_number: e.target.value,
                      })
                    }
                    maxLength={11}
                  />
                  <p className="text-wrapper-8">Phone</p>
                </label>

                <label className="project-topic">
                  <input
                    required
                    type="text"
                    className="div-wrappery"
                    placeholder="What is your group project topic"
                    onChange={(e) =>
                      setOtherFields({
                        ...otherFields,
                        project_topic: e.target.value,
                      })
                    }
                  />
                  <p className="text-wrapper-8">Project Topic</p>
                </label>

                <div className="text-wrapper-11">CREATE YOUR ACCOUNT</div>
                <div className="overlap-group-wrappery">
                  <button className="overlap-2" type="submit">
                    Register Now
                  </button>
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
                  <select
                    name=""
                    id=""
                    className="div-wrappery"
                    onChange={(e) =>
                      setOtherFields({
                        ...otherFields,
                        group_size: Number(e.target.value),
                      })
                    }
                  >
                    <option value="">Select</option>
                    {groupSizes.map((size, index) => (
                      <option key={index}>{size}</option>
                    ))}
                  </select>
                  <p className="text-wrapper-8">Group Size</p>
                </div>
                <div className="agree-button">
                  <p className="i-agreed-with-the">
                    I agreed with the event terms and conditions&nbsp;&nbsp;and
                    privacy policy
                  </p>
                  <input
                    required
                    className="rectangle-2"
                    type="checkbox"
                    onChange={(e) =>
                      setOtherFields({
                        ...otherFields,
                        privacy_policy_accepted: e.target.checked,
                      })
                    }
                  />
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
