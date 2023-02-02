import React from "react";

const text =
  "When they got to the restaurant, Num Num's owner ordered a plate of dim sum for him. Num Num couldn't believe his eyes when the plate arrived. There were steamed buns, dumplings, and even a little dish of sweet sticky rice. Num Num was in heaven!";
export const Section4 = () => {
  return (
    <div className="h-screen w-screen snap-start shrink-0 bg-[url('/public/assets/bg/liquid-cheese.svg')] bg-cover">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="w-full h-full flex flex-col gap-12 items-center justify-center">
          <div className="bg-white p-12 rounded-lg bg-opacity-50">
            <img
              className=" ml-8 w-1/3 float-right m-12"
              src="/public/assets/section4.jpg"
            />
            <p className="font-body font-light text-5xl tracking-wider leading-normal">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
