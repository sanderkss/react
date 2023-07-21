import './nav.css';
import React from 'react';


const  nav = () =>  {
    return(<nav className="header__menu menu">
             <div className="input__drop">
               <input type="text" className="input__search"/>
               <button className="input__button"></button>
           </div>
           <ul className="menu__list">
               <li className="menu__item">
                   <a href="" className="menu__link__home">HOME</a>
               </li>
               <li className="menu__item">
                   <a href="" className="menu__link">PROJECT</a>
               </li>
               <li className="menu__item">
                   <a href="" className="menu__link">GUIDES</a>
               </li>
               <li className="menu__item">
                   <a href="" className="menu__link">BLOG</a>
               </li>
               <li className="menu__item">
                   <a href="" className="menu__link">TRAINING&CERTIFICATION</a>
               </li>
               <li className="menu__item">
                   <button className="menu__link__search"></button>
               </li>
           </ul>
       </nav>
    )
}

export default nav;