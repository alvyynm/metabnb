import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Images
import mbtoken from "../assets/logos/mbtoken.png";
import metamask from "../assets/logos/metanmask.png";
import opensea from "../assets/logos/opensea.png";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <section className="bg-purple mb-[19px]">
        <ul className="flex justify-between py-[10px] px-[139px]">
          <li>
            <a href="#">
              <img src={mbtoken} alt="mbtoken logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={metamask} alt="metamask logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={opensea} alt="opensea logo" />
            </a>
          </li>
        </ul>
      </section>
      <header className="Home-header">
        <p className="text-3xl font-bold underline">
          Hello world this is my home page
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default Home;
