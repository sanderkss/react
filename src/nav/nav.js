import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Navl from "../navlink/Navl";

const Nav = ({ active, setDefault, searchIsActive, setSearchIsActive }) => {
  const link = [
    { classN: "menu__link__home", name: "HOME" },
    { classN: "menu__link", name: "PROJECT" },
    { classN: "menu__link", name: "GUIDES" },
    { classN: "menu__link", name: "BLOG" },
    { classN: "menu__link", name: "TRAINING&CERTIFICATION" }
  ]

  return (
    <nav className={active ? "header__menu active " : "header__menu "}>
      <div className="input__drop">
        <input
          type="text"
          className="input__search"
          onChange={(event) => setDefault(event.target.value)}
        />
        <button className="input__button"></button>
      </div>
      <ul className="menu__list">
        {link.map((item, index) => {  
          return <Navl key={index} classN={item.classN} name={item.name} />;
        })}
        <li className="menu__item">
          <button
            className="menu__link__search"
            onClick={() => setSearchIsActive(!searchIsActive)}
          ></button>
        </li>
        <li className="menu__item">
          <NavLink to="/" className="menu__link">LOG IN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
