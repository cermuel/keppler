import React from "react";

const DocsRotation = () => {
  return (
    <div className="absolute right-0 top-[50%] max-md:opacity-20 max-lg:opacity-30 max-sm:opacity-10">
      <div className="absolute top-0 rounded-full left-0 rotate-[270deg] border-[1px] border-white w-[250px] h-[250px] mt-[-125px] ml-[-125px]">
        <div className="w-full absolute animate-rotateFastest h-full">
          <div className="w-2 h-2 top-[-4px] left-[50%] absolute rounded-full bg-white"></div>
        </div>
      </div>
      <div className="absolute top-0 rounded-full left-0 rotate-[270deg] border-[1px] border-white w-[400px] h-[400px] mt-[-200px] ml-[-200px]">
        <div className="w-full absolute animate-rotateFaster h-full">
          <div className="w-4 h-4 top-[-8px] left-[50%] absolute rounded-full bg-white"></div>
        </div>
      </div>
      <div className="absolute top-0 rounded-full left-0 rotate-[270deg] border-[1px] border-white w-[550px] h-[550px] mt-[-275px] ml-[-275px]">
        <div className="w-full absolute animate-rotateFast h-full">
          <div className="w-6 h-6 top-[-12px] left-[50%] absolute rounded-full bg-white"></div>
        </div>
      </div>
      <div className="absolute top-0 rounded-full left-0 rotate-[270deg] border-[1px] border-white w-[700px] h-[700px] mt-[-350px] ml-[-350px]">
        <div className="w-full absolute animate-rotateMedium h-full">
          <div className="w-8 h-8 top-[-16px] left-[50%] absolute rounded-full bg-white"></div>
        </div>
      </div>
      <div className="absolute top-0 rounded-full left-0 rotate-[270deg] border-[1px] border-white w-[850px] h-[850px] mt-[-425px] ml-[-425px]">
        <div className="w-full absolute animate-rotateSlow h-full">
          <div className="w-10 h-10 top-[-20px] left-[50%] absolute rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default DocsRotation;
