import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./header/Header";
import Search from "./search/Search";
import Main from "./main/Main";
import Login from "./login/Login";
import Blog from "./blog/Blog";
import Registration from "./registration/Registration";

export const Valueup = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("jwtToken");
      await axios
        .post("http://localhost:3000/checktoken", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          if (resp.data) {
            return console.log("токен действителен");
          }
          history("/");
        })
        .catch((error) => {
          console.log("Токен недействителен");
        });
    };
    checkToken();
  }, [history]);

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
          <Route path="/registr" exact element={<Registration />} />
        </Routes>
      </div>
    </Valueup.Provider>
  );
}

export default App;
