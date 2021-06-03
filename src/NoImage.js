import React, { useState, useEffect } from "react";
import "./styles.css";

const NoImage = () => {
  return (
    <article>
      <div className="App">
        <h3 classname="loading">
          Space is taking a day off... There's no image for that date at the
          moment.
        </h3>
      </div>
    </article>
  );
};

export default NoImage;
