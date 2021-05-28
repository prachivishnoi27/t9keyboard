import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import "./App.css";

const App = () => {
    let [message, setMessage] = useState("");
  return (
    <div>
      <div className="container">
        <div className="sub-container">
          <h1>T9 Keyboard</h1>
          <p>Old Mobile phones keyboard</p>
          <div className="phone">
            <span class="dot"></span>
            <div className="screen">
              <textarea
                value={message}
                type="text"
                id="message"
                placeholder="Type something"
              />
            </div>
            <div className="keyboard">
              <Keyboard setMessage={setMessage} message={message} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
