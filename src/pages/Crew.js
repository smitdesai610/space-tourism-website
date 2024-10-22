import React, { useState } from "react";
import DouglasImg from "../assets/crew/image-douglas-hurley.webp";
import MarkImg from "../assets/crew/image-mark-shuttleworth.webp";
import VictorImg from "../assets/crew/image-victor-glover.webp";
import AnoushehImg from "../assets/crew/image-anousheh-ansari.webp";
import Data from "../data.json";
import "../assets/styles/scss/crew.scss";

export default function Crew() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const images = {
    "Douglas Hurley": DouglasImg,
    "Mark Shuttleworth": MarkImg,
    "Victor Glover": VictorImg,
    "Anousheh Ansari": AnoushehImg,
  };

  const activeCrew = Data.crew[activeTabIndex];

  return (
    <>
      <div className="CrewBg">
        <div className="CrewContainer">
          <div className="pageName">
            <div className="pageNumber">02</div>
            <div className="pageNameTitle">Meet your crew</div>
          </div>
          <div className="crewWrapper">
            <div className="crewInfo">
              <div className="crewSubInfo">
                <div className="crewRole">{activeCrew.role}</div>
                <div className="crewMemberName">{activeCrew.name}</div>
                <div className="crewMemberBio">{activeCrew.bio}</div>
              </div>
              <div className="crewSwipper">
                {Data.crew.map((_, index) => (
                  <div
                    className={`Icon ${
                      index === activeTabIndex ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleTabClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="7.5"
                        cy="7.5"
                        r="7.5"
                        fill={
                          index === activeTabIndex
                            ? "white"
                            : "rgba(255, 255, 255, 0.174)"
                        }
                        className="swipperCircle"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="crewImg">
              <img src={images[activeCrew.name]} alt={activeCrew.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
