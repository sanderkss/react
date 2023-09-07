import React from "react";
import "./Blog.css";
import Photo from "./img/1.webp";

const Blog = () => {
  return (
    <div className="page">
      <div className="page-block _container">
        <h1>HELLO, It's me</h1>
        <div>
          <img src={Photo}  alt="spring icon"></img>
        </div>
      </div>
    </div>
  );
};

export default Blog;
