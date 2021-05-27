import React from "react";
import "./styles.css";

const Footer = ({ date, title, dateDec, dateInc }) => {
  const nasaImg =
    "https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg";

  return (
    <>
      <footer>
        <small>Images from </small>
        <img src={nasaImg} />
      </footer>
    </>
  );
};

export default Footer;
