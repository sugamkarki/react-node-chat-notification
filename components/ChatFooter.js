// @ts-nocheck
import React, { useState } from "react";
import { useSockets } from "../context/socket.context";
import EVENTS from "../config/events";
const ChatFooter = () => {
  const { socket, messages } = useSockets();
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      const data = {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      };
      socket.emit(EVENTS.CLIENT.MESSAGE, data);
      console.log(data);
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
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
