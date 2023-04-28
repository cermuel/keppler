import React from "react";
import { feature } from "../types/feature";
import {
  levitating,
  levitating1,
  levitating2,
  levitatingBg,
} from "../constants";

const Feature = ({ text, title, reverse }: feature) => {
  return (
    <section
      className={`justify-center items-center mt-8 relative gap-8 flex ${
        reverse && "flex-row-reverse"
      } w-full flex-wrap px-8`}
    >
      <div className="flex flex-col items-start max-w-[480px] gap-4">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-base text-gray-600 font-light">{text}</p>
      </div>

      <div className=" w-[500px] h-[500px]  relative rounded-full flex justify-center items-center border-[1px] border-[#32528e]">
        <div className="w-full absolute  animate-rotateSlow h-full">
          <div className="absolute animate-spin z-50 top-[-16px] left-[50%] h-6 w-6 bg-[#32528e] rounded-full"></div>
        </div>
        <div className=" w-[410px] h-[410px] relative rounded-full flex justify-center items-center border-[1px] border-[#32528e]">
          <div className="w-full absolute animate-rotateMedium h-full">
            <div className="absolute animate-spin z-50 top-[-8px] left-[50%] h-4 w-4 bg-[#32528e] rounded-full"></div>
          </div>
          <div className="w-80 h-80 relative rounded-full flex justify-center items-center border-[1px] border-[#32528e]">
            <div className="w-full animate-rotateFast h-full">
              <div className="absolute animate-spin z-50 top-[-4px] left-[50%] h-2 w-2 bg-[#32528e] rounded-full"></div>
            </div>
            <div className="w-72 absolute top-[20px] left-[20px]">
              <img
                className="absolute w-full top-0"
                src={levitatingBg}
                alt=""
              />{" "}
              <img
                className="absolute w-full z-10 top-0 right-4"
                src={levitating}
                alt=""
              />
              <img
                src={levitating1}
                className="w-[20%] z-20 top-40 left-28 absolute"
                alt=""
              />
              <img
                src={levitating2}
                className="w-[15%] opacity-75 z-20 top-28 left-40 absolute"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
