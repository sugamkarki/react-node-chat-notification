import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import EVENTS from "../config/events";

let socket;
const SocketContext = createContext({
  socket,
  setUsername: () => false,
  setMessages: () => false,
  rooms: {},
  messages: [],
});

function SocketsProvider(props) {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState({});
  const [messages, setMessages] = useState([]);
  async function init() {
    await fetch("/api/socket");
    socket = io();
    console.log(socket);
  }
  useEffect(() => {
    window.onfocus = function () {
      document.title = "Chat app";
    };
    init();
  }, []);

  useEffect(() => {
    socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, username, time }) => {
      if (!document.hasFocus()) {
        document.title = "New message...";
      }

      setMessages((data) => [...data, { message, username, time }]);
    });
    socket.on(EVENTS.SERVER.MESSAGE_RESPONSE, ({ message, username, time }) => {
      if (!document.hasFocus()) {
        document.title = "New message...";
      }

      setMessages((data) => [...messages, data]);
    });
  }, [socket, messages]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        username,
        setUsername,
        rooms,
        roomId,
        messages,
        setMessages,
      }}
      {...props}
    />
  );
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
