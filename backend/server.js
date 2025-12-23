// 🔴 MUST BE FIRST
require("dotenv").config();

const http = require("http");
const app = require("./src/app");
const { initSocket } = require("./src/sockets/socket");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// initialize socket
initSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
