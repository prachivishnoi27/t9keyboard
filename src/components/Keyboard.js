import React from "react";
import "./Keyboard.css";
import  { setText } from "./KeyboardUtil";

const Keyboard = ({ message, setMessage }) => {
    const handleClick = (e) => {
        const id = e.target.id;
        setMessage(setText(Number(id), message));
    }

  return (
    <>
      <div className="row">
        <button id="1" onClick={handleClick} className="key">&#9881;</button>
        <button id="2" onClick={handleClick} className="key"> &#8629;</button>
        <button id="3" onClick={handleClick} className="key">⌫</button>
      </div>
      <div className="row">
        <button id="4" onClick={handleClick} className="key">.?!</button>
        <button id="5" onClick={handleClick} className="key">abc</button>
        <button id="6" onClick={handleClick} className="key">def</button>
      </div>
      <div className="row">
        <button id="7" onClick={handleClick} className="key">ghi</button>
        <button id="8" onClick={handleClick} className="key">jki</button>
        <button id="9" onClick={handleClick} className="key">mno</button>
      </div>
      <div className="row">
        <button id="10" onClick={handleClick} className="key">pqrs</button>
        <button id="11" onClick={handleClick} className="key">tuv</button>
        <button id="12" onClick={handleClick} className="key">wxyz</button>
      </div>
      <div className="row">
        <button id="13" onClick={handleClick} className="key">1*a</button>
        <button id="14" onClick={handleClick} className="key">_</button>
        <button id="15" onClick={handleClick} className="key">&#x2191;</button>
      </div>
    </>
  );
};

export default Keyboard;
