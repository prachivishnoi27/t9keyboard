import React, { useState } from "react";
import "../App.css"

const Messages = () => {
  const [message, setMessage] = useState("");
  const [msgList, setMsgList] = useState([]);

  const renderMsgList = () => {
    return msgList.map((message) => {
      return (
        <div className="message-content">
            <div className="item">{message}</div>
        </div>
    );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    const list = msgList;
    list.push(message);
    setMsgList(list);
    setMessage("");
  };

  return (
    <>
      {msgList.length !== 0 ? renderMsgList() : ""}
      <div className="message-bar">
        <form onSubmit={handleSubmit} action="/" method="get">
          <textarea
            value={message}
            type="text"
            id="message"
            placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Messages;
