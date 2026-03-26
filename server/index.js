const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const port = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})