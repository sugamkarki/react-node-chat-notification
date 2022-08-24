import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatBar from "../components/ChatBar";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
import { useSockets } from "../context/socket.context";
import SocketHook from "../hooks/SocketHook";
let socket;

const ChatPage = () => {
  const { socket } = useSockets();

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        {/* <ChatBody /> */}
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
