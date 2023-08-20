import "./Content.css";
import React, { useState, useContext, useEffect } from "react";
import Section from "../section/Section";
import { Valueup } from "../App";
import axios from "axios";

const Content = (props) => {
  const searchValue = useContext(Valueup);
  const [cont, setCont] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((data) => {
        console.log(data.data.map(item => item.name))
        setCont(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  const onLoadServer = (namem, index) => {
    axios
      .patch(`http://localhost:3000/`, cont[index])
      .then()
      .catch((err) => {
        console.log(err);
      });
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
    return section.title?.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <div className="section__content">
      {filtredSection.map((item, index) => {
        return (
          <Section
            key={index}
            title={item.title}
            name={item.name}
            text={item.text}
            onDelete={deleteHandler}
            onLoadServer={(event)=>onLoadServer(event,index)}
            onEditTitle={(event) => onEditTitle(event.target.value, index)}
            onEditText={(event) => onEditText(event.target.value, index)}
          />
        );
      })}
    </div>
  );
};
export default Content;
