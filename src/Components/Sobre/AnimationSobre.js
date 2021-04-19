import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../animation.json";

const AnimationSobre = () => {
  const [animationState, setAnimateState] = useState({
    isStoped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animation-container">
      <Lottie
        className="animation"
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </div>
  );
};

export default AnimationSobre;
