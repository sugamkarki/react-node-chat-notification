const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
    JOIN_ROOM: "JOIN_ROOM",
    MESSAGE: "message",

  },
  SERVER: {
    ROOMS: "ROOMS",
    MESSAGE: "message",
    ROOM_MESSAGE: "ROOM_MESSAGE",
    MESSAGE_RESPONSE: "messageResponse",
  },
};

export default EVENTS;
