import React from "react";

import imgr1 from "../assets/images/image3.jpg";
import imgl2 from "../assets/images/image6.jpg";
import imgl1 from "../assets/images/image4.jpg";
import imgr2 from "../assets/images/image5.jpg";

function Hero() {
  return (
    <section className=" ml-[100px] mr-[119px] mb-[67px] flex justify-between gap-[99px]">
      <header className="p-[29px] max-w-screen-md">
        <h1 className="text-[56px] leading-[140%]">
          Rent a <span className="text-purple">Place</span> away from{" "}
          <span className="text-purple">Home</span> in the{" "}
          <span className="text-purple">Metaverse</span>
        </h1>
        <p className="text-2xl leading-[35px] my-12">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <form action="">
            <input
              type="search"
              class="form-input rounded-lg rounded-tr-none rounded-br-none text-primary border border-border1 w-[390px]"
              placeholder="Search for location"
            />
            <button className="border rounded-lg py-2 px-4  border-purple rounded-tl-none rounded-bl-none bg-gradient-to-r from-purple to-purple text-white w-[230px] ">
              Search
            </button>
          </form>
        </div>
      </header>
      <div className="max-w-[476px]">
        <div className="grid grid-cols-2 grid-rows-1 gap-2 h-full">
          <div>
            <img
              className="w-[234px] h-[176px] object-cover rounded-[15px] mb-2"
              src={imgl1}
              alt=""
            />
            <img
              className="w-[234px] h-[176px] object-cover rounded-[15px]"
              src={imgl2}
              alt=""
            />
          </div>
          <div className="place-self-end">
            <img
              className="w-[234px] h-[176px] object-cover rounded-[15px] mb-2"
              src={imgr1}
              alt=""
            />
            <img
              className="w-[234px] h-[176px] object-cover rounded-[15px]"
              src={imgr2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
