import "./Navl.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navl = ({name,classN}) => {
  return (
    <li className="menu__item">
      <NavLink to={`/${name.toLowerCase()}`} className={classN}>{name}</NavLink>
    </li>
  );
};

export default Navl;
