import React, { useState, useEffect } from "react";
import "./styles.css";

const Image = ({ url, explanation, title, fullScreen }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article>
      <img
        className="image"
        src={url}
        alt={title}
        onClick={() => fullScreen()}
      />
      <p>
        {readMore ? `${explanation.slice(0, 120)}...` : explanation}
        <button onClick={() => setReadMore(!readMore)} className="read-more">
          {readMore ? "READ MORE" : "SEE LESS"}
        </button>
      </p>
    </article>
  );
};

export default Image;
