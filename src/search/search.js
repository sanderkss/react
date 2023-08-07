import "./Search.css";
import React from "react";

const Search = ({setDefault,searchIsActive}) => {
  return (
    <div className={searchIsActive ? "page__search active" : "page__search"}>
      <input
        type="text"
        className="page__input"
        onChange={(event) => setDefault(event.target.value)}
      />
      <button className="page__button"></button>
    </div>
  );
};

export default Search;
