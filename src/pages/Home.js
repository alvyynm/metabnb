import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
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
