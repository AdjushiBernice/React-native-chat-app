import React from "react";
import line15 from "../../static/img/line-3.svg";
import line16 from "../../static/img/line-8.svg";
import star24 from "../../static/img/star-6.png";
import star25 from "../../static/img/star-10.png";
import starPu7 from "../../static/img/star-pu-1.png";
import "../../app/globals.css";
import Image from "next/image";

const Timeline = () => {
  return (
    <div id="timeline" className="overlap-13">
      <div className="timeline">
        <div className="text-wrapper-48">Timeline</div>
        <Image className="line-15" alt="Line" src={line15} />
        <Image className="line-16" alt="Line" src={line16} />
        <Image className="line-17" alt="Line" src={line16} />
        <Image className="line-18" alt="Line" src={line16} />
        <Image className="line-19" alt="Line" src={line16} />
        <Image className="line-20" alt="Line" src={line16} />
        <div className="text-wrapper-49">Hackathon Announcement</div>
        <div className="text-wrapper-50">Teams Registration ends</div>
        <p className="text-wrapper-51">
          Getlinked Hackathon 1.0 Offically Begins
        </p>
        <div className="text-wrapper-52">Teams Registration begins</div>
        <p className="announcement-of-the">
          Announcement of the accepted teams
          <br />
          and ideas
        </p>
        <div className="text-wrapper-53">Demo Day</div>
        <p className="the-getlinked-tech">
          The getlinked tech hackathon 1.0 is formally announced
          <br />
          to the general public and teams begin to get ready to register
        </p>
        <p className="interested-teams-can">
          Interested teams can now show their interest in the
          <br />
          getlinked tech hackathon 1.0 2023 by proceeding to register
        </p>
        <p className="interested">
          Interested Participants are no longer Allowed to
          <br />
          register
        </p>
        <p className="accepted-teams-can">
          Accepted teams can now proceed to build their
          <br />
          ground breaking skill driven solutions
        </p>
        <p className="all-teams-whom-idea">
          All teams whom idea has been accepted into getlinked tech
          <br />
          hackathon 1.0 2023 are formally announced
        </p>
        <p className="teams-get-the">
          Teams get the opportunity to pitch their projects to judges.
          <br />
          The winner of the hackathon will also be announced on
          <br />
          this day
        </p>
        <div className="text-wrapper-54">November 18, 2023</div>
        <div className="text-wrapper-55">November 18, 2023</div>
        <div className="text-wrapper-56">November 18, 2023</div>
        <div className="text-wrapper-57">November 18, 2023</div>
        <div className="text-wrapper-58">November 18, 2023</div>
        <div className="text-wrapper-59">November 18, 2023</div>
        <div className="no">
          <div className="overlap-group-3">
            <div className="text-wrapper-60">1</div>
          </div>
        </div>
        <div className="no-2">
          <div className="overlap-group-3">
            <div className="text-wrapper-60">2</div>
          </div>
        </div>
        <div className="no-3">
          <div className="overlap-group-3">
            <div className="text-wrapper-60">3</div>
          </div>
        </div>
        <div className="no-4">
          <div className="overlap-group-3">
            <div className="text-wrapper-60">4</div>
          </div>
        </div>
        <div className="no-5">
          <div className="overlap-group-3">
            <div className="text-wrapper-61">5</div>
          </div>
        </div>
        <div className="no-6">
          <div className="overlap-group-3">
            <div className="text-wrapper-61">6</div>
          </div>
        </div>
        <Image className="star-24" alt="Star" src={star24} />
        <Image className="star-25" alt="Star" src={star25} />
        <Image className="star-pu-7" alt="Star pu" src={starPu7} />
        <p className="here-is-the">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
      </div>
    </div>
  );
};

export default Timeline;
