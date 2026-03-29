import socket from '../socket';
import { useState, useEffect } from 'react';

export default function ChatBoard() {
    const [messages, setMessages] = useState([]);

    function sendmsg(formData) {
        const msg = formData.get("msg");
        const username = formData.get("username");

        socket.auth = { username };
        socket.connect();

        socket.emit('chat message', {
            user: username,
            text: msg,
            time: new Date().toISOString()
        });
    }

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages((prev) => [...prev, msg]) //append new message
        });

        socket.on('users', (users) => {
            users.forEach((user) => {
                user.self = user.userID === socket.id;
            })
        });

        socket.on('user connected', (user) => {
            console.log(user);
        });

        return () => {
            socket.off("chat message"); //cleanup
        }
    }, []);

    return (
        <>
            <h1>Chat Board</h1>

            <form action={sendmsg}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="msg">Messsage: </label>
                    <input name="msg" id='msg' />

                    <button type="submit">Send</button>
                </div>
            </form>

            <div>
                <h2>Messages</h2>
                <div>
                    {messages.map((msg, idx) => (
                        <div key={idx}>
                            <strong>{msg.user}</strong>
                            <p>{msg.text}</p>
                            <p>{msg.time}</p>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}