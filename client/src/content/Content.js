import "./Content.css";
import React, { useState, useContext, useEffect } from "react";
import Section from "../section/Section";
import { Valueup } from "../App";
import axios from "axios";

const Content = () => {
  const searchValue = useContext(Valueup);
  const [cont, setCont] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((data) => {
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

  const onLoadServer = (index) => {
    axios
      .patch(`http://localhost:3000/`, cont[index])
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  const onEditTxt = ( name, index, prop) => {
    const textl = cont[index];
    textl[prop] = name;
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
            index={index}
            onDelete={() => deleteHandler(index)}
            onLoadServer={()=>onLoadServer(index)}
            onEditTxt={(event, format) => onEditTxt(event.target.value, index, format)}
          />
        );
      })}
    </div>
  );
};
export default Content;
