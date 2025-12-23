const { Server } = require("socket.io");

let io;

exports.initSocket = (server) => {
  io = new Server(server, { cors: { origin: "*" } });
  io.on("connection", (socket) => {
    console.log("Client connected");
  });
};

exports.emitTokenUpdate = (data) => {
  io.emit("token:update", data);
};
