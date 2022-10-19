import React, { Profiler } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boutiques from "./Boutiques";
import LeftNav from "./LeftNav";
import TopNav from "./TopNav";
import Profile from "./Profile";


function Main() {
  return (
    <div className="gx-container">
      <LeftNav />
      <div className="gx-main-container">
        <TopNav />
        <div className="gx-main-content">
          <div className="gx-wrapper">
              <Routes>
              <Route path="/" element={< Boutiques/>} />
              <Route path="/profile" element={< Profile/>} />
              </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
