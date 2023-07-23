import "./content.css";
import React, { useState } from "react";
import Section from "../section/section";


const Content = (props) => {
  const [cont, setCont] = useState([
    {
      id: 1,
      title: "SPRING BOOT",
      name: "icon__logo__1",
      text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    },
    {
      id: 2,
      title: "SPRING FRAMEWORK",
      name: "icon__logo__2",
      text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
    },
    {
      id: 3,
      title: "SPRING CLOUD DATA FLOW",
      name: "icon__logo__3",
      text: "An orchestration service for composable data microservice applications on modern runtimes.",
    },
    {
      id: 4,
      title: "SPRING CLOUD",
      name: "icon__logo__4",
      text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    },
    {
      id: 5,
      title: "SPRING DATA",
      name: "icon__logo__5",
      text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    },
    {
      id: 6,
      title: "SPRING INTEGRATION",
      name: "icon__logo__6",
      text: "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters.",
    },
  ]);
  return (
    <div className="section__content">
      {cont.map((child, index) => {
        return (
          <Section
            key={index}
            title={child.title}
            name={child.name}
            text={child.text}
          />
        );
      })}
    </div>
  );
};
export default Content;
