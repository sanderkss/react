import "./section.css";
import React from "react";


// Поменять по всему проекту - компоненты с большой буквы! название файлов с компонентами тоже с большой как и css
const section = (props) => {
  return (
    <div className="container__section">
      <div className="container__logo">
        <div className={props.name}></div>
      </div>
      <h2 className="container__title">{props.title}</h2>
      <div className="container__text">{props.text}</div>
    </div>
  );
};

export default section;
