import React, { useRef } from "react";
// import useWindowSize from "./hooks/useWindowSize.js";
import FeedYourCuriosity from "../img/lockups/feed-your-curiosity---white.png";
import { Player } from "video-react";

function Hero() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  return (
    <div className="Hero">
      <div className="background-video full-width">
        <video autoPlay loop id="heroVideo">
          <source src="/videos/placeholder-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <img className="lockup" src={FeedYourCuriosity} alt="Red Rock Deli" />
      </div>
    </div>
  );
}

export default Hero;
