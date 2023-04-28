// import React from "react";

import { whosImage } from "../constants";

const Who = () => {
  return (
    <section className="w-screen relative pt-28 pb-20 skew-y-[-5deg] overflow-hidden top-[-10vh] bg-white">
      <div className="skew-y-[5deg] w-full h-full relative">
        <div className="text-[40px] text-center">Who’s using Keppler?</div>
        <p className="font-extralight text-center mt-12 mb-10">
          Keppler is already being used with hundreds of students learning web
          development.
        </p>
        <div className="flex justify-center">
          <img src={whosImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Who;
