import { renderOptionsResults } from './quiz.js';

const socket = io();

function sendResult(result) {
    socket.emit("client:send-results", result);
}

function getResults() {
    socket.emit("client:get-results");
}

socket.on("server:results", (results) => {
    renderOptionsResults(results);
});

export { getResults, sendResult };
