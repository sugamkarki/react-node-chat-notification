import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatBar from "../components/ChatBar";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
import SocketHook from "../hooks/SocketHook";
const ChatPage = () => {
  //   const socket = SocketHook();
  const [socket, setSocket] = useState(SocketHook());
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
