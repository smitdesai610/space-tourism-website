import React from "react";
import "../assets/styles/scss/home.scss";

export default function Home() {
  return (
    <>
      <div className="homeBg">
        <div className="homeContainer">
          <div className="homeInfo">
            <div className="homeTitle">
              <p className="homeSubTitle">So, you want to travel to</p>
              <span className="spaceTitle">Space</span>
              <p className="homeContaint">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          <div className="explore">
            <div className="exploreHover">
              <div className="exploreIcon">
                <span>Explore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
