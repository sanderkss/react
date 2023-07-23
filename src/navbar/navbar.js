import "./navbar.css";
import React from "react";

const navbar = (props) => {
  return (
    <li className="menu__item">
      <a className={props.class}>{props.name}</a>
    </li>
  );
};

export default navbar;
