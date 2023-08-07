import "./Nav.css";
import React from "react";
import Navlink from "../navlink/Navlink";

const Nav = ({ active, setDefault, searchIsActive, setSearchIsActive }) => {
  const link = [
    { class: "menu__link__home", name: "HOME" },
    { class: "menu__link", name: "PROJECT" },
    { class: "menu__link", name: "GUIDES" },
    { class: "menu__link", name: "BLOG" },
    { class: "menu__link", name: "TRAINING&CERTIFICATION" },
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
        {link.map((child, index) => {
          return <Navlink key={index} class={child.class} name={child.name} />;
        })}
        <li className="menu__item">
          <button
            className="menu__link__search"
            onClick={() => setSearchIsActive(!searchIsActive)}
          ></button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
