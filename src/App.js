import "./App.css";
import React, { useState } from "react";
import Header from "./header/Header";
import Search from "./search/Search";
import Main from "./main/Main";

export const Valueup = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  // setDefault плохое название 
  function setDefault(value) {
    setSearchValue(value);
  }
  const [searchIsActive, setSearchIsActive] = useState(false);

  return (
    <Valueup.Provider value={searchValue}>
      <div className="App">
        <Header
          setSearchIsActive={setSearchIsActive}
          searchIsActive={searchIsActive}
          setDefault={setDefault}
        />
        <Search
          setSearchIsActive={setSearchIsActive}
          searchIsActive={searchIsActive}
          setDefault={setDefault}
        />
        <Main />
      </div>
    </Valueup.Provider>
  );
}

export default App;
