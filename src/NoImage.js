import React, { useState, useEffect } from "react";
import "./styles.css";

const NoImage = () => {
  return (
    <article>
      <div className="App">
        <h3 classname="loading">There's no image for that date yet!</h3>
      </div>
    </article>
  );
};

export default NoImage;
