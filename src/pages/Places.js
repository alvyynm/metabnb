import React from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Places() {
  return (
    <div className="Places">
      <Navbar />
      <header className="Places-header">
        <p className="text-3xl font-bold underline">
          Hello world this is my places page
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default Places;
