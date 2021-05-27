import React, { useState, useEffect } from "react";
import "./styles.css";

const Image = ({ url, explanation, title }) => {
  const [readMore, setReadMore] = useState(true);
  const fullscreen = () => {};

  return (
    <article>
      <img
        className="image"
        src={url}
        alt={title}
        onClick={() => fullScreen()}
      />
      <p>
        {readMore ? `${explanation.slice(0, 100)}...` : explanation}
        <button onClick={() => setReadMore(!readMore)} className="read-more">
          {readMore ? "READ MORE" : "SEE LESS"}
        </button>
      </p>
    </article>
  );
};

export default Image;
