import { useEffect, useState } from "react";
import { fetchMessages, sendMessage } from "../api/apis";

export default function MessageBoard() {
  const [messages, setMessages] = useState([
    { user: "Alice", text: "Hello!" },
    { user: "Bob", text: "Hey there!" },
  ]);

  const [input, setInput] = useState("");
  
  const sendMsg = async () => {
    try {
      let data = {
        groupId: 10,
        userId: 5,
        content: input,
        metadata: {
          type: "text"
        }
      }
  
      let res = await sendMessage(data);
      console.log(res);

    } catch (err) {
      console.log("Error while sending message: ", err);
    }
  }

  const handleSend = () => {
    try {
      if (!input.trim()) return;
  
      let message = {
        user: "nora",
        text: input
      }
  
      sendMsg();
      // TODO:
      // - send message via API / socket

      setMessages([...messages, message]);
      setInput("");

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      let groupId = 10;
      let msgs = await fetchMessages(groupId);
      console.log("messages fetched: ", msgs)
      // setMessages(msgs);
    }

    fetch();
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded">
            <span className="font-semibold">{msg.user}: </span>
            <span>{msg.text}</span>
          </div>
        ))}

        {/* TODO:
          - replace with real-time messages
          - auto-scroll to bottom
        */}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-800 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 bg-gray-800 rounded outline-none"
        />

        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}