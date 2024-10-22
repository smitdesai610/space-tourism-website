import React, { useState } from "react";
import "../assets/styles/scss/destination.scss";
import MoonImg from "../assets/destination/image-moon.webp";
import MarsImg from "../assets/destination/image-mars.webp";
import EuropaImg from "../assets/destination/image-europa.webp";
import TitanImg from "../assets/destination/image-titan.webp";
import Data from "../data.json";

export default function Destination() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const images = {
    Moon: MoonImg,
    Mars: MarsImg,
    Europa: EuropaImg,
    Titan: TitanImg,
  };

  const activeDestination = Data.destinations[activeTabIndex];
  return (
    <>
      <div className="DestinationBg">
        <div className="DestinationContainer">
          <div className="pageName">
            <div className="pageNumber">01</div>
            <div className="pageNameTitle">Pick your destination</div>
          </div>
          <div className="destingWrapper">
            <div className="spaceImg">
              <img
                src={images[activeDestination.name]}
                alt={activeDestination.name}
              />
            </div>

            <div className="spaceInfo">
              <div className="spaceInfoTitleNav">
                {Data.destinations.map((dest, index) => (
                  <span
                    className={`tab ${
                      index === activeTabIndex ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleTabClick(index)}
                  >
                    {dest.name}
                  </span>
                ))}
              </div>
              <div className="spaceTitleName">{activeDestination.name}</div>
              <div className="spaceSubInfo">
                {activeDestination.description}
              </div>
              <div className="distanceAndTravel">
                <div className="distanceWrapper">
                  <div className="distanceTitle">Avg. distance</div>
                  <div className="distanceValue">
                    {activeDestination.distance}
                  </div>
                </div>
                <div className="travelWrapper">
                  <div className="travelTitle">Est. travel time</div>
                  <div className="travelValue">{activeDestination.travel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
