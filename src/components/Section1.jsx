import React from "react";

export const Section1 = () => {
  return (
    <div className="bg-[url('/public/assets/bg/stacked-peaks-haikei.png')] bg-cover h-screen w-screen snap-start shrink-0">
      <div className="max-w-6xl m-auto ">
        <div className="flex gap-4 pt-12">
          <div className="w-1/2">
            <h1 className="font-title font-black text-8xl text-black tracking-wide">
              Num Num and the Dim Sum Dream
            </h1>
          </div>
          <div className="w-1/2">
            <img className="w-full rounded-xl" src={"/assets/hero2.jpg"} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl mt-6 bg-opacity-75">
          <p className="font-body text-3xl tracking-wider font-light">
            The story is about a cute little Corgi named Num Num who loves to
            eat dim sum. He dreams about it all day long and can't wait to eat
            it. One day, his owner takes him to a special restaurant where he
            gets to eat all the dim sum he wants! He loves it so much that he
            wants to eat it all the time.
          </p>
        </div>
      </div>
    </div>
  );
};
