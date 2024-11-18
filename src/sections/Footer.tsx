import React from "react";

const Footer = () => {
  return (
    <footer className="relative pt-[90px] pb-[60px] text-white h-[50vh]">
      <section className="absolute skew-y-[-5deg] w-full left-0 h-[60%] top-0 bg-gradient-to-r from-[#330867] to-[#31a7bb]"></section>
      <section className="bg-gradient-to-r from-[#330867] to-[#31a7bb] top-[30%] h-[70%] absolute w-full left-0"></section>
      <section className="z-50 absolute top-0 left-0 w-full flex flex-col items-center px-10 py-20">
        <div className="flex justify-center gap-28">
          <ul>
            <li className=" text-sm mb-8">Keppler</li>
            <li className="text-sm font-extralight my-2">
              <a href="#features">Features</a>
            </li>
            <li className="text-sm font-extralight my-2">
              <a href="#get-started">Get started</a>
            </li>
            <li className="text-sm font-extralight my-2">Who's using it?</li>
          </ul>
          <ul>
            <li className=" text-sm mb-8">Development</li>
            <li className="text-sm font-extralight my-2 hover:underline underline-offset-4 hover:animate-movement cursor-pointer transition-all duration-500">
              Github
            </li>
            <li className="text-sm font-extralight my-2">Report an issue</li>
            <li className="text-sm font-extralight my-2">Contact us</li>
          </ul>
        </div>
        <p className="font-extralight text-sm mt-12">
          Keppler is an open-source project made by Bruno Simon and cloned by <a href="https://cermuel.vercel.app">CERMUEL</a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
