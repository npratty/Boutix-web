import React from "react";

export default ({ name, className, style, fontSize, tooltip, onClick }) => (
  <span
    className={`material-icons-outlined ${className ? className : ""}`}
    title={tooltip}
    style={
      style
        ? style
        : {
            fontSize: fontSize || 16
          }
    }
    onClick={onClick ? onClick : () => {}}
  >
    {name}
  </span>
);
