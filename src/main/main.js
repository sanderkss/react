import "./Main.css";
import React from "react";
import Content from "../content/Content";

const Main = () => {
  return (
    <main className="page">
      <div className="page__main-block main-block">
        <div className="main-block__container _container">
          <h1 className="main-block__tittle">Основные проекты</h1>
          <div className="main-block__text">
            От конфигурации до безопасности, от веб-приложений до больших данных
            - какими бы ни были потребности вашего приложения в инфраструктуре,
            есть <b> Spring Project</b>, который поможет вам создать его.
            Начните с малого и используйте то, что вам нужно -{" "}
            <b>Spring имеет модульную конструкцию</b>
          </div>
          <Content />
        </div>
      </div>
    </main>
  );
};

export default Main;
