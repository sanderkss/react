import "./App.css";
import React, { useState } from "react";
import Header from "./header/header";
import Search from "./search/search";
import Main from "./main/main";

export const Valueup = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  // setDefault плохое название 
  function setDefault(value) {
    setSearchValue(value);
  }
  
  //searchIsActive, setSearchIsActive лучше так
  const [clickValue, setClickValue] = useState(false);

  return (
    <Valueup.Provider value={searchValue}>
      <div className="App">
        <Header
          setClickValue={setClickValue}
          clickValue={clickValue}
          setDefault={setDefault}
        />
        <Search
          setClickValue={setClickValue}
          clickValue={clickValue}
          setDefault={setDefault}
        />
        <Main />
      </div>
    </Valueup.Provider>
  );
}

export default App;
