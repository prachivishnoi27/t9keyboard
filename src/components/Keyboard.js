import React, { useState } from "react";
import "./Keyboard.css";
import  { setText } from "./KeyboardUtil";

const Keyboard = ({ message, setMessage }) => {
    const [isCap, setIsCap] = useState(0);
    const handleClick = (e) => {
        const id = e.target.id;
        let result = setText(Number(id), message, isCap);
        setMessage(result.message);
        setIsCap(result.isCap);
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
        <button id="5" onClick={handleClick} className="key">{isCap === 0?'abc': (isCap === 1? "Abc": "ABC")}</button>
        <button id="6" onClick={handleClick} className="key">{isCap === 0?'def': (isCap === 1? "Def": "DEF")}</button>
      </div>
      <div className="row">
        <button id="7" onClick={handleClick} className="key">{isCap === 0?'ghi': (isCap === 1? "Ghi": "GHI")}</button>
        <button id="8" onClick={handleClick} className="key">{isCap === 0?'jkl': (isCap === 1? "Jkl": "JKL")}</button>
        <button id="9" onClick={handleClick} className="key">{isCap === 0? 'mno': (isCap === 1? "Mno": "MNO")}</button>
      </div>
      <div className="row">
        <button id="10" onClick={handleClick} className="key">{isCap === 0?'pqrs': (isCap === 1? "Pqrs": "PQRS")}</button>
        <button id="11" onClick={handleClick} className="key">{isCap === 0?'tuv': (isCap === 1? "Tuv": "TUV")}</button>
        <button id="12" onClick={handleClick} className="key">{isCap === 0?'wxyz': (isCap === 1? "Wxyz": "WXYZ")}</button>
      </div>
      <div className="row">
        <button id="13" onClick={handleClick} className="key">*#$@</button>
        <button id="14" onClick={handleClick} className="key">_</button>
        <button id="15" onClick={handleClick} className="key">&#x2191;</button>
      </div>
    </>
  );
};

export default Keyboard;
