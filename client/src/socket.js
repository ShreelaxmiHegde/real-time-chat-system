import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URL, {
    autoConnect: false
});

//development debug
socket.onAny((event, ...args) => {
    console.log("Event :", event, args);
});

socket.on("connect_error", (err) => {
    if(err.message === "invalid username") {
        console.log("invalid username!!!")
    }
})

export default socket;