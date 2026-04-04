import socket from '../socket';
import { useState, useEffect } from 'react';

export default function ChatBoard() {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

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

    const info = {
        roomID: "group:222",
        username: "demoUser"
    }

    function joinGroup() {
        //TODO: client-side auth validation
        socket.connect();
        socket.emit('join_room', info);
    }

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages((prev) => [...prev, msg]) //append new message
        });

        socket.on('user connected', (user) => {
            console.log("Connected user: ", user);
            setUsers((prev) => [...prev, user]);
        });

        socket.on('new_join', (msg) => {
            console.log("new user msg: ", msg)
        })

        return () => {
            socket.off("chat message"); //cleanup
            socket.off('users');
            socket.off('user connected');
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

            <form action={joinGroup}>
                <button type='submit'>Join Group</button>
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
                            <hr />
                        </div>
                    ))}
                </div>
            </div>

            <hr />
            <div>
                <h2>Users</h2>
                {users.map((user) => (
                    <>
                    <h3 key={user.userID}>{user.username}</h3>
                    <hr />
                    </>
                ))}
            </div>
        </>
    )
}