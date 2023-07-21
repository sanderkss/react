import './header.css';
import React from 'react';
import Nav from '../nav/nav';

const  header = () =>  {
    return (<header className="header">
    <div className="header__container _container">
       <button className="menu__burger"></button>
       <a href="" className="mobile__logo"></a>
       <a href="" className="header__logo"></a>
       <Nav />
   </div>
</header>

        
    )
}

export default header;