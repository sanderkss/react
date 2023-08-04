import "./nav.css";
import React, { useState } from "react";
import Navbar from "../navbar/navbar";

const Nav = ({ active, setDefault, clickValue, setClickValue }) => {
  //Тут стэйт вообще не нужен, это просто константы неизменные, вынести вверх за компонент
  const [link, setLink] = useState([
    { class: "menu__link__home", name: "HOME" },
    { class: "menu__link", name: "PROJECT" },
    { class: "menu__link", name: "GUIDES" },
    { class: "menu__link", name: "BLOG" },
    { class: "menu__link", name: "TRAINING&CERTIFICATION" },
  ]);

  return (
    <nav className={active ? "header__menu active  " : "header__menu "}>
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
          //Navbar хуевое название NavLink или что то подобное
          return <Navbar key={index} class={child.class} name={child.name} />;
        })}
        <li className="menu__item">
          <button
            className="menu__link__search"
            onClick={() => setClickValue(!clickValue)}
          ></button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
