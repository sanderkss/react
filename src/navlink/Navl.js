import "./Navl.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navl = (props) => {
  return (
    <li className="menu__item">
      <NavLink to={`/${props.name.toLowerCase()}`} className={props.class}>{props.name}</NavLink>
    </li>
  );
};

export default Navl;
