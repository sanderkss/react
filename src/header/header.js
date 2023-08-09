import "./Header.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../nav/Nav";

const Header = ({setDefault,setSearchIsActive,searchIsActive}) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="header__container _container">
        <button
          className="menu__burger"
          onClick={() => setMenuActive(!menuActive)}
        ></button>
        <NavLink to="/" className="mobile__logo"></NavLink>
        <NavLink to="/" className="header__logo"></NavLink>
        <Nav
          active={menuActive}
          setActive={setMenuActive}
          setDefault={setDefault}
          setSearchIsActive={setSearchIsActive}
          searchIsActive={searchIsActive}
        />
      </div>
    </header>
  );
};

export default Header;
