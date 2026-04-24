import { useState } from "react";
import AuthLayout from "./AuthLayout";

export default function AcceptInvite() {
  const [password, setPassword] = useState("");

  const handleAccept = (e) => {
    e.preventDefault();
    console.log("ACCEPT INVITE");

    // verify token + create account
  };

  return (
    <AuthLayout
      title="Join your team"
      subtitle="You’ve been invited to a workspace"
    >
      <form onSubmit={handleAccept} className="space-y-4">

        <input
          type="password"
          placeholder="Set your password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />

        <button className="w-full bg-black text-white py-2 rounded-lg">
          Join Workspace
        </button>

      </form>
    </AuthLayout>
  );
}