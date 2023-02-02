import React from "react";

const text =
  "One day, Num Num's owner took him to the local dim sum restaurant. Num Num was so excited that he could hardly contain himself. He wagged his tail so hard that it nearly wagged right off!";
export const Section3 = () => {
  return (
    <div className="h-screen w-screen snap-start shrink-0 bg-[url('/public/assets/bg/liquid-cheese.svg')] bg-cover">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="w-full h-full flex gap-12">
          <img className=" ml-8 h-full" src="/public/assets/section3.jpg" />
          <div className="flex items-center">
            <div className="bg-white p-12 rounded-lg bg-opacity-50">
              <p className="font-body font-light text-5xl tracking-wider leading-normal">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
