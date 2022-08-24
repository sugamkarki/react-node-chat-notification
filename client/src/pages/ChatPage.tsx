import React, { useState, useEffect, useRef } from "react";
import ChatBar from "../components/ChatBar";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";
// @ts-ignore
const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    // @ts-ignore
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    // @ts-ignore
    socket.on("typingResponse", (data) => {
      setTypingStatus(data);
      setTimeout(() => {
        setTypingStatus("");
      }, 1000);
    });
  }, [socket]);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          // @ts-ignore

          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
