import React, { useState, useEffect } from "react";
import "./styles.css";

const Video = ({ url, explanation, title }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article>
      <iframe
        width="1100"
        height="595"
        className="image"
        src={url}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        {readMore ? `${explanation.slice(0, 100)}...` : explanation}
        <button onClick={() => setReadMore(!readMore)} className="read-more">
          {readMore ? "READ MORE" : "SEE LESS"}
        </button>
      </p>
    </article>
  );
};

export default Video;
