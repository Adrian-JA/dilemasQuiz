const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const Sockets = require("./socket.js");

app.use(express.static(__dirname + "/public"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

Sockets(io);

server.listen(process.env.PORT || 3000, () => console.log("Server running on port 3000"));
