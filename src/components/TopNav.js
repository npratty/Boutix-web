import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import UserMenu from "./UserMenu";

function TopNav() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <header className="main-header">
      <div className="gx-toolbar">
        <div className="sidebar-mobile-menu">
          <a className="gx-menu-icon menu-toggle" href="#menu">
            <span className="menu-icon icon-grey"></span>
          </a>
        </div>
        <div className="search-bar right-side-icon bg-transparent d-none d-sm-block">
          <div className="form-group">
            <input
              className="form-control border-0"
              placeholder="Search in app..."
              value=""
              type="search"
            />
            <button className="search-icon">
              <i className="zmdi zmdi-search zmdi-hc-lg"></i>
            </button>
          </div>
        </div>

        <ul className="quick-menu header-notifications ml-auto">
          <li className="nav-searchbox dropdown d-inline-block d-sm-none">
            <a
              data-toggle="dropdown"
              aria-haspopup="true"
              className="d-inline-block icon-btn"
              aria-expanded="false"
            >
              <i className="zmdi zmdi-search zmdi-hc-fw"></i>
            </a>
            <div
              aria-hidden="true"
              className="p-0 dropdown-menu dropdown-menu-right search-bar right-side-icon search-dropdown"
            >
              <div className="form-group">
                <input
                  className="form-control border-0"
                  placeholder=""
                  value=""
                  type="search"
                />
                <button className="search-icon">
                  <i className="zmdi zmdi-search zmdi-hc-lg"></i>
                </button>
              </div>
            </div>
          </li>

          <li>
            <UserMenu />
          </li>
        </ul>
      </div>
    </header>
  );
}
export default TopNav;
