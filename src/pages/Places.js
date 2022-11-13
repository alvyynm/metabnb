import React from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Places() {
  return (
    <div className="Places">
      <Navbar />
      <header className="Places-header">
        <div className="w-[90%] mx-auto lg:mx-[100px] bg-orange-400">
          <ul className="grid grid-cols-[max-content_max-content_max-content_max-content] mx-auto md:grid-cols-6 lg:mx-0 grid-rows-3 gap-3 md:gap-6 lg:gap-12 lg:grid-cols-[max-content_max-content_max-content_max-content_max-content_max-content_max-content_max-content_max-content] lg:grid-rows-1 items-center">
            <li>
              <a href="#">Restaurant</a>
            </li>
            <li>
              <a href="#">Cottage</a>
            </li>
            <li>
              <a href="#">Castle</a>
            </li>
            <li>
              <a href="#">fantast city</a>
            </li>
            <li>
              <a href="#">beach</a>
            </li>
            <li>
              <a href="#">Carbins</a>
            </li>
            <li>
              <a href="#">Off-grid</a>
            </li>
            <li>
              <a href="#">Farm</a>
            </li>
            <li className="col-span-2 md:col-span-1">
              <button className="btn border-1 border-[#333] w-[161px] flex justify-between">
                Location
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default Places;
