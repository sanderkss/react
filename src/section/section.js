import "./Section.css";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Section = (props) => {
  const [image, setImage] = useState();
  const [imageURL, setImgURL] = useState();
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgURL(fileReader.result);
  };
  const handleOnchange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImage(file);
    fileReader.readAsDataURL(file);
  };

  const [editActive, setEditActive] = useState(false);

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
          <img src={imageURL ? imageURL : props.name} />
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
        </div>
      </div>
      <h2 className="container__title">{props.title}</h2>
      <input
        className={editActive ? "edit__title active" : "edit__title"}
        type="text"
        onChange={props.onEditTitle}
        value={props.title}
      />
      <div className="container__text">{props.text}</div>
      <input
        className={editActive ? "edit__text active" : "edit__text"}
        type="text"
        onChange={props.onEditText}
        value={props.text}
      />
    </div>
  );
};

export default Section;
