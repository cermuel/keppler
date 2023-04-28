import React from "react";
import DocsRotation from "../components/DocsRotation";

const Docs = () => {
  return (
    <section
      id="get-started"
      className="w-screen relative pt-20 pb-40 skew-y-[-5deg] overflow-hidden top-[-10vh]  min-h-screen bg-gradient-to-r from-[#330867] to-[#31a7bb]"
    >
      <div className="skew-y-[5deg] w-full h-full relative">
        <h1 className="text-white text-5xl text-center">Get started</h1>
        <DocsRotation />
        <div className="ml-[20%] space-y-8 mt-10">
          <div className="flex md:gap-10 sm:gap-8 gap-4 text-white">
            <h1 className="text-6xl">1.</h1>
            <div className="mt-8">
              <h2 className="text-xl mb-4 tracking-wide font-extralight">
                Install Keppler globally
              </h2>
              <p className="font-extralight tracking-wide ml-8">
                You must have{" "}
                <a href="https://nodejs.org/en/" className="underline">
                  node
                </a>{" "}
                and{" "}
                <a href="https://www.npmjs.com/" className="underline">
                  npm
                </a>{" "}
                already installed. <br /> In your console, run:
              </p>
              <pre className="bg-[#111] text-sm w-[300px] tracking-wide border-l-4 px-6 py-2 my-2 border-l-white font-mono text-white">
                npm install -g keppler
              </pre>
              <span className="text-xs font-extralight ml-8">
                Didn’t work? <span className="underline">Report a bug.</span>
              </span>
            </div>
          </div>{" "}
          <div className="flex md:gap-10 sm:gap-8 gap-4 text-white">
            <h1 className="text-6xl">2.</h1>
            <div className="mt-8">
              <h2 className="text-xl mb-4 tracking-wide font-extralight">
                Launch Keppler inside your project folder
              </h2>
              <p className="font-extralight tracking-wide ml-8">
                Navigate to your project folder. <br /> In your console, run:
              </p>
              <pre className="bg-[#111] tracking-wide w-[300px] text-sm border-l-4 px-6 py-2 my-2 border-l-white font-mono text-white">
                keppler "My awesome project"
              </pre>
              <p className="text-xs font-extralight ml-8">
                This will launch Keppler and automatically open your browser at
                <br /> the URL for viewing your code.
              </p>
            </div>
          </div>{" "}
          <div className="flex md:gap-10 sm:gap-8 gap-4 text-white">
            <h1 className="text-6xl">3.</h1>
            <div className="mt-8">
              <h2 className="text-xl mb-4 tracking-wide font-extralight">
                Share the URL with your audience!
              </h2>
              <p className="font-extralight tracking-wide ml-8">
                Make sure you’re on the same local network. <br />
                Your audience will now be able to see the contents of the files
                <br /> in project folder, updated in real-time.
              </p>
            </div>
          </div>{" "}
          <div className="flex md:gap-10 sm:gap-8 gap-4 text-white">
            <h1 className="text-6xl">4.</h1>
            <div className="mt-8">
              <h2 className="text-xl mb-4 tracking-wide font-extralight">
                Get coding
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
