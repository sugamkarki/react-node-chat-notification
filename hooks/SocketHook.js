import { useEffect } from "react";
import io from "Socket.IO-client";
let socket;
function SocketHook() {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();
  };
  return socket;
}

export default SocketHook;
