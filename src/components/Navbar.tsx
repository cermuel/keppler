import React from "react";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-end h-20 items-center sm:px-16 px-6">
      <ul className="flex font-extralight text-base items-center text-white sm:gap-8 gap-4 ">
        <li>Features</li>
        <li>Get Started</li>
        <li>Who's using it?</li>
        <li>
          <FaGithub className="text-white text-2xl" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
