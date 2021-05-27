import React from "react";
import "./styles.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Nav = ({ date, title, dateDec, dateInc }) => {
  return (
    <>
      <h3>Astronomy Image of the Day</h3>
      <h5>Use the arrows below to scroll between daily images</h5>
      <nav>
        <button onClick={() => dateDec()} className="prev">
          <FaChevronLeft />
        </button>
        <div className="scroll">
          <h2 className="title">
            {date.toDateString()}: {title}
          </h2>
        </div>
        <button onClick={() => dateInc()} className="next">
          <FaChevronRight />
        </button>
      </nav>
    </>
  );
};

export default Nav;
