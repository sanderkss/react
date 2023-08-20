import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Search from "./search/Search";
import Main from "./main/Main";
import Login from "./login/Login";
import Blog from "./blog/Blog";

export const Valueup = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

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

        <Routes>
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/main" exact element={<Main />} />
        </Routes>
      </div>
    </Valueup.Provider>
  );
}

export default App;
