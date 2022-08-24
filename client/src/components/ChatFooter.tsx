import React, { useState } from "react";
import checkPageStatus from "../utils/functions";
// @ts-ignore
const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  // @ts-ignore
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem("userName"), message });
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
      // @ts-ignore
      checkPageStatus(message, localStorage.getItem("userName"));
    }
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
