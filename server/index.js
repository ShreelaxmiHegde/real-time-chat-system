const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const port = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

io.use((socket, next) => {
    const username = socket.handshake.auth.username;

    if(!username) {
        return next(new Error("invalid username"));
    }

    socket.username = username;
    next();
})

io.on('connection', (socket) => {
    console.log("User Connected: ", socket.handshake.auth.username);

    const users = [];
    for(let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username
        });
    }

    socket.emit("users", users);

    socket.broadcast.emit('user connected', {
        userID: socket.id,
        username: socket.username
    })

    socket.on('chat message', (data) => {
        console.log("message: ", data);
        io.emit('chat message', data);
    })

    socket.on('disconnect', () => {
        console.log("User Disconnected:", socket.id)
    })
});

server.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});