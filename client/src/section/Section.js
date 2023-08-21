import "./Section.css";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios"

const hostURL = "http://localhost:3000/upload";

const Section = (props) => {
  const [uploaded, setUploaded] = useState();
  const [imageURL, setimageURL] = useState();
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setimageURL(fileReader.result);
  }

  const handleOnchange = (event) => { 
    event.preventDefault();
    const file = event.target.files[0];
    fileReader.readAsDataURL(file);    
  };

  const handleLoadImg = async () => {
    const formData = new FormData();
    formData.append("file", imageURL);
    console.log(formData);
    await fetch(hostURL, {
      method: "POST",
      body: formData,
    });
    
    // const data = await res.json();
    // setUploaded(data);
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
          <img src={imageURL ? imageURL : props.name} alt="spring icon" />
        </div>
        <div
          className={
            editActive
              ? "file-uploader__uploadbutton active"
              : "file-uploader__uploadbutton"
          }
        >
           <form action="http://localhost:3000/upload" method="post" encType="multipart/form-data">
          <input
            id="file-loader-button"
            type="file"
            onChange={handleOnchange}
            name="file"
          />
          <button className="btn__loadImg" onClick={handleLoadImg}>upload</button>
          </form>
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
