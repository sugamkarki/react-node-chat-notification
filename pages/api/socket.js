import { Server } from "Socket.IO";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log(`⚡: ${socket.id} user just connected!`);
      socket.on("disconnect", () => {
        console.log("🔥: A user disconnected");
      });
    });
    io.on("message", (data) => {
      console.log(data);
    });

    io.on("disconnect", () => {
      console.log("🔥: A user disconnected");
    });
  }
  res.end();
};

export default SocketHandler;
