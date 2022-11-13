import { React, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logos/logo.png";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="pt-[43px]">
      <div className=" w-[90%] lg:w-auto mx-auto lg:mx-[100px] mb-[125px]">
        <nav className="flex justify-between items-center">
          <div>
            <img src={logo} alt="metabnb logo" className="w-4/5" />
          </div>
          <button
            className="lg:hidden"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div
            className={
              isNavExpanded ? " lg:inline-block" : "hidden lg:inline-block"
            }
          >
            <ul className="flex lg:gap-12 text-xl text-primary">
              <li className="[text-shadow:0_4px_2px_rgba(0_0_0/_0.25)]">
                <Link to="/">Home</Link>
              </li>
              <li className="[text-shadow:0_4px_2px_rgba(0_0_0/_0.25)]">
                <Link to="/places">Places to stay</Link>
              </li>
              <li className="[text-shadow:0_4px_2px_rgba(0_0_0/_0.25)]">
                <a href="#">NFTs</a>
              </li>
              <li className="[text-shadow:0_4px_2px_rgba(0_0_0/_0.25)]">
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div
            className={
              isNavExpanded ? " lg:inline-block" : "hidden lg:inline-block"
            }
          >
            <button className="text-white  bg-purple btn border-purple bg-gradient-to-r from-purple to-purple">
              Connect wallet
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
