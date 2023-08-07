import "./Navlink.css";
import React from "react";

const Navlink = (props) => {
  return (
    <li className="menu__item">
      <a className={props.class}>{props.name}</a>
    </li>
  );
};

export default Navlink;
