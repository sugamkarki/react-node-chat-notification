import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatBar from "../components/ChatBar";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
import SocketHook from "../hooks/SocketHook";
let socket;

const ChatPage = () => {
  //   const socket = SocketHook();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  };
  //   useEffect(() => {
  //   }, [messages]);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
