import { React, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logos/logo.png";
import Modal from "./Modal";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="pt-[43px]">
      <div className=" w-[90%] lg:w-auto mx-auto lg:mx-[100px]">
        <nav className="flex justify-between items-center gap-[10.1875rem] relative">
          <div className="lg:basis-2/12">
            <img src={logo} alt="metabnb logo" className="w-48 md:w-full" />
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
              isNavExpanded
                ? "bg-gray-50 absolute top-9 right-0 w-full lg:static lg:inline-block lg:basis-8/12"
                : "hidden lg:inline-block"
            }
          >
            <ul className="flex flex-col gap-4 pl-6 py-6 lg:py-0 lg:pl-0  lg:flex-row lg:gap-12 text-xl text-primary lg:items-center">
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
              <li className="lg:ml-[6.11rem]">
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className="text-white rounded-[10px]  bg-purple btn border-purple bg-gradient-to-r from-purple to-purple"
                >
                  Connect wallet
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Navbar;
