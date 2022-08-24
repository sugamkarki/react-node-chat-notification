import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import EVENTS from "../config/events";

const socket = io("/api/socket");
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
  const [socketID, setSocketID] = useState([]);

  useEffect(() => {
    window.onfocus = function () {
      document.title = "Chat app";
    };
  }, []);

  useEffect(() => {
    socket.on(EVENTS.SERVER.CONNECTION, (data) => {
      console.log(data);
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
