import { Outlet } from "react-router-dom";
import React  from "react";
import LeftNav from "./LeftNav";
import TopNav from "./TopNav";


function Main() {
  return (
    <div className="gx-container">
      <LeftNav />
      <div className="gx-main-container">
        <TopNav />
        <div className="gx-main-content">
          <div className="gx-wrapper">
              <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
