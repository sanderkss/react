import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const logState = [
    { login: "sanderkss", password: "123" },
    { login: "melnik", password: "areyoulikerita?" },
  ];
  let history = useNavigate();
  const logRef = useRef();
  const passRef = useRef();

  const sendData = () => {
    console.log(logRef);
    let isSuccess = false;
    for (let i = 0; i < logState.length; i++) {
      if (
        logRef.current.value === logState[i].login &&
        passRef.current.value === logState[i].password
      ) {
        isSuccess = true;
      }
    }
    if (isSuccess) {
      history("/main");
    } else {
      alert("Navigation error");
    }
    // };
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
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
