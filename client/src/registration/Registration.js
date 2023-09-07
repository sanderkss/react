import React, { useRef} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const logRef = useRef();
  const passRef = useRef();

  const createAcc = () => {
    const login = logRef.current.value;
    const password = passRef.current.value;
    axios
      .patch("http://localhost:3000/registr", { login, password })
      .then(resp => {
        if(resp) alert("пользователь зарегестрирован")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="page">
      <div className="page__main-block _container">
        
        <div className="reg__page">
        <h1>Registration</h1>
          <h2>Login or Email</h2>
          <input className="reg__input" ref={logRef} type="text" />
          <h2>Password</h2>
          <input className="reg__input" type="text" ref={passRef} />
          <button className="reg__button" onClick={createAcc}>
            Create account
          </button>
          <NavLink className="login__link" to="/">Sign in</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Registration;
