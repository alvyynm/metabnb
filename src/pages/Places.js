import React from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

// Card images
import img1 from "../assets/images/Frame151_4.png";
import img2 from "../assets/images/Frame151_5.png";
import img3 from "../assets/images/Frame151_6.png";
import img4 from "../assets/images/Frame151_7.png";
import img5 from "../assets/images/Frame151.png";
import img6 from "../assets/images/Frame151_1.png";
import img7 from "../assets/images/Frame151_2.png";
import img8 from "../assets/images/Frame151_3.png";
import img9 from "../assets/images/Frame151_8.png";
import img10 from "../assets/images/Frame151_9.png";
import img11 from "../assets/images/Frame151_10.png";
import img12 from "../assets/images/Frame151_11.png";
import img13 from "../assets/images/Frame151_12.png";
import img14 from "../assets/images/Frame151_13.png";
import img15 from "../assets/images/Frame151_14.png";
import img16 from "../assets/images/Frame151_15.png";

function Places() {
  return (
    <div className="Places relative">
      <Navbar />
      <header className="Places-header mt-12 lg:mt-[115px]">
        <div className="w-[90%] mx-auto lg:w-auto lg:mx-[100px]">
          <ul className="grid grid-cols-[max-content_max-content_max-content_max-content] mx-auto md:grid-cols-6 lg:mx-0 grid-rows-3 gap-3 md:gap-6 lg:gap-16 lg:grid-cols-[max-content_max-content_max-content_max-content_max-content_max-content_max-content_max-content_max-content] lg:grid-rows-1 items-center">
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
              <button className="btn border-1 border-[#333] w-[161px] rounded-lg flex justify-between">
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

      {/* <Modal /> */}
      <section className="lg:mx-[100px] mb-[92px] mt-[64px]">
        <div className="w-[90%] mx-auto lg:w-auto lg:mx-0">
          <div className="grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-6 place-items-center">
            <Card imgSrc={img5} />
            <Card imgSrc={img6} />
            <Card imgSrc={img7} />
            <Card imgSrc={img8} />
            <Card imgSrc={img1} />
            <Card imgSrc={img2} />
            <Card imgSrc={img3} />
            <Card imgSrc={img4} />
            <Card imgSrc={img9} />
            <Card imgSrc={img10} />
            <Card imgSrc={img11} />
            <Card imgSrc={img12} />
            <Card imgSrc={img13} />
            <Card imgSrc={img14} />
            <Card imgSrc={img15} />
            <Card imgSrc={img16} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Places;
