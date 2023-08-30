import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [mongo, setMongo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((data) => {
        setMongo(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const history = useNavigate();
  const logRef = useRef();
  const passRef = useRef();
  const sendData = () => {
    let isSuccess = false;
    for (let i = 0; i < mongo.length; i++) {
      if (
        logRef.current.value === mongo[i].login &&
        String(passRef.current.value) === mongo[i].password
      ) {
        isSuccess = true;
      }
    }
    if (isSuccess) {
      history("/main");
    } else {
      alert("Navigation error");
    }
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
