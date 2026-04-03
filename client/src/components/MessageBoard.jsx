import { useState } from "react";

export default function MessageBoard() {
  const [messages] = useState([
    { user: "Alice", text: "Hello!" },
    { user: "Bob", text: "Hey there!" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // TODO:
    // - send message via API / socket
    // - optimistic UI update

    setInput("");
  };

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