import { useState } from "react";

export default function InviteMembers() {
  const [email, setEmail] = useState("");
  const [invites, setInvites] = useState([]);

  const handleInvite = () => {
    if (!email) return;

    setInvites([...invites, email]);
    setEmail("");

    // API → send invite
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-lg">

      <h2 className="text-lg font-semibold">Invite Members</h2>
      <p className="text-sm text-gray-500 mt-1">
        Invite your team to collaborate in this workspace
      </p>

      <div className="flex gap-2 mt-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />

        <button
          onClick={handleInvite}
          className="bg-black text-white px-4 rounded-lg text-sm"
        >
          Invite
        </button>
      </div>

      {/* Pending invites */}
      <div className="mt-4 space-y-2">
        {invites.map((mail, i) => (
          <div
            key={i}
            className="text-sm text-gray-600 border rounded-md px-3 py-2"
          >
            {mail} — Pending
          </div>
        ))}
      </div>

    </div>
  );
}