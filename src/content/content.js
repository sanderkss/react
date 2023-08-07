import "./Content.css";
import React, { useState, useContext } from "react";
import Section from "../section/Section";
import { Valueup } from "../App";
import firstPicture from "./img/1.png";
import secondPicture from "./img/2.png";
import thirdPicture from "./img/3.png";
import forthPicture from "./img/4.png";
import fivePicture from "./img/5.png";
import sixPicture from "./img/6.png";

const Content = (props) => {
  const searchValue = useContext(Valueup);
  const [cont, setCont] = useState([
    {
      id: 1,
      title: "SPRING BOOT",
      name: firstPicture,
      text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    },
    {
      id: 2,
      title: "SPRING FRAMEWORK",
      name: secondPicture,
      text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
    },
    {
      id: 3,
      title: "SPRING CLOUD DATA FLOW",
      name: thirdPicture,
      text: "An orchestration service for composable data microservice applications on modern runtimes.",
    },
    {
      id: 4,
      title: "SPRING CLOUD",
      name: forthPicture,
      text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    },
    {
      id: 5,
      title: "SPRING DATA",
      name: fivePicture,
      text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    },
    {
      id: 6,
      title: "SPRING INTEGRATION",
      name: sixPicture,
      text: "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters.",
    },
  ]);

  const deleteHandler = (index) => {
    const sector = cont.concat();
    sector.splice(index, 1);
    setCont(sector);
  };

  const onEditTitle = (name, index) => {
    console.log(name, index);
    const titl = cont[index];
    titl.title = name;
    const edit = [...cont];
    edit[index] = titl;
    setCont(edit);
  };

  const onEditText = (name, index) => {
    console.log(name, index);
    const textl = cont[index];
    textl.text = name;
    const editT = [...cont];
    editT[index] = textl;
    setCont(editT);
  };

  const filtredSection = cont.filter((section) => {
    return section.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <div className="section__content">
      {filtredSection.map((child, index) => {
        return (
          <Section
            key={index}
            title={child.title}
            name={child.name}
            text={child.text}
            onDelete={deleteHandler}
            onEditTitle={(event) => onEditTitle(event.target.value, index)}
            onEditText={(event) => onEditText(event.target.value, index)}
          />
        );
      })}
    </div>
  );
};
export default Content;
