import "./header.css";
import React, { useState } from "react";
import Nav from "../nav/nav";

// не нужно везде писать props
// лучше делай деструктуризацию вот так сразу сonst Header = ({ setDefault, setClickValue, clickValue })

// props можно писать если у тебя такой кейс что props не используется а ты просто их пробрасываешь дальше, вот пример

/* 
const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container _container">
        <button
          className="menu__burger"
          onClick={() => setMenuActive(!menuActive)}
        ></button>
        <a href="" className="mobile__logo"></a>
        <a href="" className="header__logo"></a>
        <Nav
          active={menuActive}
          setActive={setMenuActive}
          ...props
        />
      </div>
    </header>
  );
*/
const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="header__container _container">
        <button
          className="menu__burger"
          onClick={() => setMenuActive(!menuActive)}
        ></button>
        <a href="" className="mobile__logo"></a>
        <a href="" className="header__logo"></a>
        <Nav
          active={menuActive}
          setActive={setMenuActive}
          setDefault={props.setDefault}
          setClickValue={props.setClickValue}
          clickValue={props.clickValue}
        />
      </div>
    </header>
  );
};

export default Header;
