const { saveResults } = require("./public/utils.js");

module.exports = (io) => {
    io.on("connection", (socket) => {
        socket.on("client:send-results", (result) => {
            const results = saveResults(result);
            io.emit("server:results", results);
        });

        socket.on("disconnect", () => {
            console.log("user disconnected");
        });
    });
};
