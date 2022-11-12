import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Images
import mbtoken from "../assets/logos/mbtoken.png";
import metamask from "../assets/logos/metanmask.png";
import opensea from "../assets/logos/opensea.png";

// Card images
import img1 from "../assets/images/Frame151_4.png";
import img2 from "../assets/images/Frame151_5.png";
import img3 from "../assets/images/Frame151_6.png";
import img4 from "../assets/images/Frame151_7.png";
import img5 from "../assets/images/Frame151.png";
import img6 from "../assets/images/Frame151_1.png";
import img7 from "../assets/images/Frame151_2.png";
import img8 from "../assets/images/Frame151_3.png";

// Outro images
import ftimg1 from "../assets/images/image9.png";
import ftimg2 from "../assets/images/image8.png";
import ftimg3 from "../assets/images/image7.png";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <section className="bg-purple mb-[19px]">
        <ul className="flex justify-between py-[10px] px-3 lg:px-[139px]">
          <li>
            <a href="#">
              <img
                src={mbtoken}
                alt="mbtoken logo"
                className="w-24 lg:w-full"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={metamask}
                alt="metamask logo"
                className="w-24 lg:w-full"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={opensea}
                alt="opensea logo"
                className="w-24 lg:w-full"
              />
            </a>
          </li>
        </ul>
      </section>
      <section className="bg-white ">
        <div className="lg:mx-[100px] mb-[53px]">
          <h2 className="text-5xl font-bold leading-[3.75rem] pt-[39px] pb-[43px] text-center">
            Inspiration for your next adventure
          </h2>
          <section className="w-[90%] mx-auto lg:w-auto lg:mx-0">
            <div className="grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-6 place-items-center">
              <Card imgSrc={img1} />
              <Card imgSrc={img2} />
              <Card imgSrc={img3} />
              <Card imgSrc={img4} />
              <Card imgSrc={img5} />
              <Card imgSrc={img6} />
              <Card imgSrc={img7} />
              <Card imgSrc={img8} />
            </div>
          </section>
        </div>
      </section>
      <section className="bg-purple">
        <div className="w-[90%] mx-auto lg:mx-[100px] flex justify-between lg:gap-[122px]">
          <div className="my-[100px] lg:w-[704px] flex justify-center flex-col">
            <h2 className="font-bold text-5xl leading-[60px] text-white mb-[35px]">
              Metabnb NFTs
            </h2>
            <p className="text-lg leading-[35px] text-white mb-10 lg:mb-[58px]">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <div className="mx-auto lg:mx-0">
              <button className="btn bg-white text-purple">Learn more</button>
            </div>
          </div>
          <div className="hidden lg:inline-block lg:w-[954px] my-[100px] relative">
            <div className=" lg:h-[55vh]">
              <img
                src={ftimg1}
                className="max-w-[17.2rem] absolute top-11 right-20 rotate-[24deg] rounded-[10px]"
                alt=""
              />
              <img
                src={ftimg2}
                className="max-w-[17.2rem] absolute top-48 right-7  rounded-[10px] rotate-[-18.76deg] z-10"
                alt=""
              />
              <img
                src={ftimg3}
                className="max-w-[17.2rem] absolute top-36 left-20 rounded-[10px] rotate-[-28.02deg]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
