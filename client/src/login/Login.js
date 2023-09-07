import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  // const [token, setToken] = useState("");

  const history = useNavigate();
  const logRef = useRef();
  const passRef = useRef();
  const sendData = () => {
    const login = logRef.current.value;
    const password = passRef.current.value;
    axios
      .post("http://localhost:3000/users", { login, password })
      .then((token) => {
        if (token.data) {
          const jwtToken = token.data.token;
          localStorage.setItem("jwtToken", jwtToken);

          history("/main");
        } else {
          alert("Неправильный логин или пароль");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="page">
      <div className="page__main-block _container">
        <div className="login__page">
          <h2>Login</h2>
          <input className="login__input" ref={logRef} type="text" />
          <h2>Password</h2>
          <input className="login__input" type="text" ref={passRef} />
          <button className="login__button" onClick={sendData}>
            Sign in
          </button>
          <h3>or</h3>
        <NavLink className="reg__link" to="/registr">Registration</NavLink>
        </div>
        
      </div>
    </div>
  );
};
export default Login;
