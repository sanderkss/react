import "./Section.css";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

const hostURL = "http://localhost:3000/upload";

const Section = (props) => {
  const [editActive, setEditActive] = useState(false);
  const [imageURL, setimageURL] = useState();
  const fileReader = new FileReader();

  const handleOnchange = (event) => {
    const file = event.target.files[0];
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setimageURL(fileReader.result);
    };
  };

  const handleLoadImg = () => {
    axios
      .patch(hostURL, { imageURL, index: props.index })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="container__section">
      <div className="change">
        <EditIcon
          className="edit__icon"
          onClick={() => setEditActive(!editActive)}
        />
        <DeleteIcon className="delete__icon" onClick={props.onDelete} />
      </div>
      <div className="container__logo">
        <div>
          <img src={imageURL ? imageURL : props.name} alt="spring icon" />
        </div>
        <div
          className={
            editActive
              ? "file-uploader__uploadbutton active"
              : "file-uploader__uploadbutton"
          }
        >
          <input
            id="file-loader-button"
            type="file"
            onChange={handleOnchange}
          />
          <button className="btn__loadImg" onClick={handleLoadImg}>
            upload
          </button>
        </div>
      </div>
      <h2 className="container__title">{props.title}</h2>
      <input
        className={editActive ? "edit__title active" : "edit__title"}
        type="text"
        onChange={props.onEditTitle}
        onBlur={props.onLoadServer}
        value={props.title}
      />
      <div className="container__text">{props.text}</div>
      <input
        className={editActive ? "edit__text active" : "edit__text"}
        type="text"
        onChange={props.onEditText}
        onBlur={props.onLoadServer}
        value={props.text}
      />
    </div>
  );
};

export default Section;
