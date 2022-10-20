import React, { useState, useRef } from "react";
import UserMenu from "./UserMenu";
import { useNavigate } from "react-router-dom";

function TopNav() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <header className="main-header">
      <div className="gx-toolbar" >
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
            <a
              className="gx-btn btn-warning"
              onClick={() => navigate("../cart")}
              style={{ height: "40px" }}
            >
              <span>
                Cart Items
                <span className="ml-2 mb-0 badge badge-light badge-circle">
                  5
                </span>
              </span>
            </a>
            <li style={{ marginTop: "10px" }}>
              <UserMenu />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default TopNav;
