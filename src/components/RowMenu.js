import React from "react";
import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export const RowMenu = ({ children, whiteMenu, menuButton }) => {
  return (
    <Menu
      menuClassName="row-menu"
      className="row-menu-container"
      menuButton={
        menuButton || (
          <span
            className={`material-icons-outlined ${
              whiteMenu ? "text-white" : "text-primary"
            }`}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            more_vert
          </span>
        )
      }
      arrow
      transition
    >
      {children}
    </Menu>
  );
};

export { MenuItem as RowMenuItem } from "@szhsin/react-menu";
