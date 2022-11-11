import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Places from "./pages/Places";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App font-primary">
              <Home />
            </div>
          }
        />
        <Route
          path="/places"
          element={
            <div className="App font-primary">
              <Places />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
