import React, { useState } from "react";
import Data from "../data.json";
import LaunchImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportImg from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceImg from "../assets/technology/image-space-capsule-portrait.jpg";
import smallLaunchImg from "../assets/technology/image-launch-vehicle-landscape.jpg";
import smallSpaceportImg from "../assets/technology/image-spaceport-landscape.jpg";
import smallSpaceImg from "../assets/technology/image-space-capsule-landscape.jpg";
import "../assets/styles/scss/technology.scss";

export default function Technology() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  // const images = {
  //   "Launch vehicle": LaunchImg,
  //   Spaceport: SpaceportImg,
  //   "Space capsule": SpaceImg,
  //   smallLaunch: smallLaunchImg,
  //   smallSpaceport: smallSpaceportImg,
  //   smallSpace: smallSpaceImg,
  // };
  const images = {
    "Launch vehicle": { portrait: LaunchImg, landscape: smallLaunchImg },
    Spaceport: { portrait: SpaceportImg, landscape: smallSpaceportImg },
    "Space capsule": { portrait: SpaceImg, landscape: smallSpaceImg },
  };
  const activeTechnology = Data.technology[activeTabIndex];

  return (
    <div className="TechnologyBg">
      <div className="TechnologyContainer">
        <div className="pageName">
          <div className="pageNumber">03</div>
          <div className="pageNameTitle">Space launch 101</div>
        </div>
        <div className="technologyWrapper">
          <div className="technologyInfo">
            <div className="techSwipNumber">
              {Data.technology.map((_, index) => (
                <div
                  className={` ${index === activeTabIndex ? "active" : ""}`}
                  key={index}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="Numbers">{index + 1}</div>
                </div>
              ))}
            </div>
            <div className="technologySubInfo">
              <div className="technologyTitle">The terminology...</div>
              <div className="technologyName">{activeTechnology.name}</div>
              <div className="technologyDescription">
                {activeTechnology.description}
              </div>
            </div>
          </div>
          <div className="technologyImg">
            <picture>
              <source
                srcSet={images[activeTechnology.name].landscape}
                media="(min-width: 426px)and(max-width: 1024px)"
              />
              <img
                src={images[activeTechnology.name].portrait}
                alt={activeTechnology.name}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
