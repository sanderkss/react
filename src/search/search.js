import "./search.css";
import React from "react";

const Search = (props) => {
  return (
    <div className={props.clickValue ? "page__search active" : "page__search"}>
      <input
        type="text"
        className="page__input"
        onChange={(event) => props.setDefault(event.target.value)}
      />
      <button className="page__button"></button>
    </div>
  );
};

export default Search;
