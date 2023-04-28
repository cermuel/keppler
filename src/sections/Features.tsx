// import React from "react";

import Feature from "../components/Feature";
import { text1, text2, text3, title1, title2, title3 } from "../constants";

const Features = () => {
  return (
    <section
      id="features"
      className="w-screen py-24 relative skew-y-[-5deg] top-[-10vh] min-h-screen bg-white"
    >
      <div className="skew-y-[5deg] relative">
        <h1 className="text-center text-[40px] tracking-wide">Features</h1>
        <h3 className="text-center text-2xl text-gray-700 mt-16 mb-4">
          Your audience will thank you
        </h3>
        <div className="w-full justify-center flex">
          <p className="max-w-[490px] text-base text-gray-600 font-light text-center">
            Let your audience browse the code of any file in your project or
            catch up with your most recent changes during your code
            presentation. With Keppler, your audience will now always be
            up-to-date with what you’re doing, and have the bigger picture in
            mind.
          </p>
        </div>
        <Feature title={title1} text={text1} reverse={false} />
        <div className="bg-transparent h-20 w-full"></div>
        <Feature title={title2} text={text2} reverse={true} />
        <div className="bg-transparent h-20 w-full"></div>
        <Feature title={title3} text={text3} reverse={false} />
      </div>
    </section>
  );
};

export default Features;
