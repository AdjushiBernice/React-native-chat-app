import React from "react";
import "../../app/globals.css"
import element4 from "../../static/img/8046554-1.png"
import purple5 from "../../static/img/purple-lens-flare-png-5.png"
import purple4 from "../../static/img/purple-lens-flare-png-4.png"
import Image from "next/image";

const Criteria = () => {
  return (
    <div>
      <p className="judging-criteria-key">
        <span className="span">
          Judging Criteria
          <br />
        </span>
        <span className="text-wrapper-7">Key attributes</span>
      </p>
      <Image className="purple-lens-flare-4" alt="Purple lens flare" src={purple5} />
            <Image className="purple-lens-flare-5" alt="Purple lens flare" src={purple4} />
            <Image className="element-4" alt="Element" src={element4}/>
            <p className="innovation-and">
              <span className="text-wrapper-12">Innovation and Creativity</span>
              <span className="text-wrapper-13">
                : Evaluate the uniqueness and creativity of the
                <br />
                solution. Consider whether it addresses a real-world problem in a novel <br />
                way or introduces innovative features.
              </span>
            </p>
            <p className="functionality-assess">
              <span className="text-wrapper-12">Functionality:</span>
              <span className="text-wrapper-13">
                {" "}
                Assess how well the solution works. Does it perform its <br />
                intended functions effectively and without major issues? Judges would
                <br />
                consider the completeness and robustness of the solution.
              </span>
            </p>
            <p className="impact-and-relevance">
              <span className="text-wrapper-12">Impact and Relevance: </span>
              <span className="text-wrapper-13">
                Determine the potential impact of the solution <br />
                in the real world. Does it address a significant problem, and is it relevant <br />
                to the target audience? Judges would assess the potential social, <br />
                economic, or environmental benefits.
              </span>
            </p>
            <p className="technical-complexity">
              <span className="text-wrapper-12">Technical Complexity: </span>
              <span className="text-wrapper-13">
                Evaluate the technical sophistication of the solution. <br />
                Judges would consider the complexity of the code, the use of advanced <br />
                technologies or algorithms, and the scalability of the solution.
              </span>
            </p>
            <p className="adherence-to">
              <span className="text-wrapper-12">Adherence to Hackathon Rules: </span>
              <span className="text-wrapper-13">
                Judges will Ensure that the team adhered <br />
                to the rules and guidelines of the hackathon, including deadlines, use of <br />
                specific technologies or APIs, and any other competition-specific requirements.
              </span>
            </p>
            <button className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Read More</div>
              </div>
            </button>

    </div>
  );
};

export default Criteria;
