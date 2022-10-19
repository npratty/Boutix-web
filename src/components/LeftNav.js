import React from "react";

function LeftNav() {
  return (
    <div id="menu" className="side-nav gx-sidebar">
      <div className="navbar-expand-lg">
        <div className="sidebar-header" >
          <a
            style={{ display: "flex" }}
            className="site-logo"
            href="./home"
          >
            <img src="images/favicon.ico" alt="Boutix" />
            <a style={{ margin: "1px 10px 4px 5px" }}>Boutix</a>
          </a>
        </div>

        <div id="main-menu" className="main-menu navbar-collapse collapse">
          <ul className="nav-menu">
            <li className="menu" style={{ marginTop: "25px" }}>
              <a >
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i>
                <span classNameName="nav-text">Boutiques</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default LeftNav;
