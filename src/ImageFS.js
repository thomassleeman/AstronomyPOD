import React from "react";
import { FiX } from "react-icons/fi";

import "./styles.css";

const ImageFS = ({ url, title, closeFs }) => {
  return (
    <>
      <button className="fiX" onClick={() => closeFs()}>
        <FiX />
      </button>
      <article>
        <img className="imageFs" src={url} alt={title} />
      </article>
    </>
  );
};

export default ImageFS;
