import socket from '../socket';
import { useState, useEffect } from 'react';

export default function ChatBoard() {
    const [messages, setMessages] = useState([]);

    function sendmsg(formData) {
        const msg = formData.get("msg");
        socket.emit('chat message', {
            user: socket.id,
            text: msg,
            time: new Date().toISOString()
        });
    }

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages((prev) => [...prev, msg]) //append new message
        });

        return () => {
            socket.off("chat message"); //cleanup
        }
    }, []);

    return (
        <>
            <h1>Chat Board</h1>
            <form action={sendmsg}>
                <input name="msg" />
                <button type="submit">Send</button>
            </form>

            <div>
                <h2>Messages</h2>
                <div>
                    {messages.map((msg, idx) => (
                        <div key={idx}>
                            <strong>{msg.user}</strong>
                            <p>{msg.text}</p>
                            <p>{msg.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}