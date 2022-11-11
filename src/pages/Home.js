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
      <section>
        <ul>
          <li>
            <img src={mbtoken} alt="" />
          </li>
          <li>
            <img src={metamask} alt="" />
          </li>
          <li>
            <img src={opensea} alt="" />
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
