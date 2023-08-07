import "./Header.css";
import React, { useState } from "react";
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
        <a href="!#" className="mobile__logo"></a>
        <a href="!#" className="header__logo"></a>
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
