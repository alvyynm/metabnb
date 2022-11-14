import React from "react";

import hero from "../assets/images/hero.svg";

function Hero() {
  return (
    <section className="w-[90%] mx-auto lg:w-auto lg:ml-[100px] lg:mr-[119px] mb-[67px] flex justify-between flex-col lg:flex-row gap-14 lg:gap-[99px] mt-12 lg:mt-[125px]">
      <header className="lg:py-[1.8125rem] lg:max-w-[40.375rem]">
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
              class="form-input rounded-lg rounded-tr-none rounded-br-none text-primary border border-border1 w-[70%] lg:w-[390px] mb-5 lg:m-0"
              placeholder="Search for location"
            />
            <button className="border rounded-lg py-2 px-4  border-purple rounded-tl-none rounded-bl-none bg-gradient-to-r from-purple to-purple text-white lg:w-[230px] w-[30%] ">
              Search
            </button>
          </form>
        </div>
      </header>
      <div className="lg:max-w-[29.75rem]">
        <div className="h-full">
          <img
            className="w-full"
            src={hero}
            alt=" featured metabnb metaverse homes"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
