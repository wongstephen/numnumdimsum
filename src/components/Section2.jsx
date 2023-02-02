import React from "react";

const text =
  "Once upon a time, in a land far, far away, there lived a little Corgi named Num Num. Num Num was a happy and playful pup, but there was one thing that he loved more than anything else in the world – dim sum!";
export const Section2 = () => {
  return (
    <div className="h-screen w-screen snap-start shrink-0">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="w-full h-full py-24">
          <img className="float-right ml-8" src="/public/assets/section2.jpg" />
          <p className="font-body font-light text-5xl tracking-wider leading-normal">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
