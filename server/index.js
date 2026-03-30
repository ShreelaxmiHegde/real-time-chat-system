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

app.use(express.json()); //enable req.body parsing
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

io.on('connection', (socket) => {
    console.log("User Connected: ", socket.id);

    socket.on('join_room', (info) => {
        console.log(info);
        // TODO: auth validation
        socket.join(info.roomID);
        socket.to(info.roomID).emit("new_join", `${info.username} joined`)
    })

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