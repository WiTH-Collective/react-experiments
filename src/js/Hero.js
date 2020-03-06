import React, { useRef, useState, useEffect } from "react";
import FeedYourCuriosity from "../img/lockups/feed-your-curiosity---white.png";

function Hero() {
  // const vid = useRef();
  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // });

  const videoRef = useRef(null);

  useEffect(() => {
    // console.log(videoRef.current);
    // videoRef.current.play();
    setTimeout(() => {
      videoRef.current.play();
    }, 100);
  }, []);

  return (
    <section className="Hero">
      <div className="background-video full-width">
        <video ref={videoRef} mute="true" autoPlay playsInline loop id="heroVideo">
          <source src="/videos/placeholder-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute-overlay-container">
        <div className="container">
          <img className="lockup" src={FeedYourCuriosity} alt="Red Rock Deli" />
          <div className="scroll-prompt" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
