"use client";

import Lottie from "react-lottie";

import animationData from "@/data/confetti.json";

interface BentoGridLottieProps {
  copied: boolean;
}

const BentoGridLottie = ({ copied }: BentoGridLottieProps) => {
  return (
    <button
      tabIndex={-1}
      className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
    >
      <Lottie
        options={{
          loop: copied,
          autoplay: copied,
          animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
    </button>
  );
};

export default BentoGridLottie;
