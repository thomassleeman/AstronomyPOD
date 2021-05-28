import React, { useState, useEffect } from "react";
import "./styles.css";

const NoImage = () => {
  return (
    <article>
      <div className="App">
        <h3 classname="loading">
          That's as far forwards as we can go. You'll have to wait for more
          images and videos!
        </h3>
      </div>
    </article>
  );
};

export default NoImage;
