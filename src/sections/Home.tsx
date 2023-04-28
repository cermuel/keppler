import { useLayoutEffect, useState } from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { FcPodiumWithSpeaker } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import audience from "../assets/audience.mp4";
import speaker from "../assets/speaker.mp4";

const Home = () => {
  const [hidden, sethidden] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      sethidden(false);
    }, 10000);
  }, []);
  return (
    <section
      id="home"
      className="w-screen py-20 skew-y-[-5deg] top-[-10vh] relative  min-h-screen bg-gradient-to-r from-[#330867] to-[#31a7bb]"
    >
      <div className="skew-y-[5deg]">
        {" "}
        <Navbar />
        <Logo />
      </div>
      <p className="text-2xl skew-y-[5deg] max-sm:text-lg tracking-wider font-extralight text-center w-full text-white">
        Real-time code sharing for your lectures and presentations
      </p>
      <div className="w-full skew-y-[5deg] max-sm:hidden gap-4 px-4 flex justify-around items-center mt-12">
        <div
          className={` animate-reappearing ${
            hidden && "hidden"
          } flex flex-col items-center`}
        >
          <video className={`w-[500px] rounded-md`} autoPlay muted loop>
            <source src={audience} type="video/mp4"></source>
          </video>
          <IoIosPeople className="text-white text-4xl" />
          <p className="text-white justify-center text-lg font-light">
            Audience
          </p>
        </div>
        <div className="flex flex-col transition-all items-center">
          <video className="w-[500px]  rounded-md" autoPlay muted loop>
            <source src={speaker} type="video/mp4"></source>
          </video>
          <FcPodiumWithSpeaker className="text-white text-4xl" />
          <p className="text-white justify-center text-lg font-light">
            Speaker
          </p>
        </div>
      </div>
      <div className="w-full skew-y-[5deg] flex justify-center max-sm:mt-20">
        <a className="cursor-pointer transition-all duration-300 ease-in-out delay-150 rounded-[22px] font-light tracking-wide h-10 w-56 flex justify-center hover:bg-white items-center hover:text-[#31a7bb] text-white border-white border-[1px]">
          Get started
        </a>
      </div>
      <div className="w-full skew-y-[5deg] flex justify-center mt-6">
        <span className="mouse relative h-6 w-4 rounded-3xl border-[1px] border-white flex items-center justify-center">
          <span className="h-1 w-[1px] bg-white animate-upToDown"></span>
        </span>
      </div>
    </section>
  );
};

export default Home;
