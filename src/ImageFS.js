import React from "react";
import { FiX } from "react-icons/fi";

import "./styles.css";

const ImageFS = ({ url, title, closeFs }) => {
  return (
    <>
      <nav>
        <button className="fiX" onClick={() => closeFs()}>
          <FiX />
        </button>
      </nav>
      <article>
        <img className="imageFs" src={url} alt={title} />
      </article>
    </>
  );
};

export default ImageFS;
