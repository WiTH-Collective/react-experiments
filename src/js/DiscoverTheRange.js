import React, { useRef, useEffect } from "react";

const DiscoverTheRange = props => {
  const carousel = useRef(null);

  useEffect(() => {
    // setTimeout(() => {
    //   videoRef.current.play();
    // }, 100);
  }, []);

  return (
    <section className="DiscoverTheRange">
      <div className="scroll-prompt scroll-prompt-top" />
      <h2>Discover The Range</h2>
      <div ref={carousel} className="Carousel" />
    </section>
  );
};

export default DiscoverTheRange;
