import { useState } from "react";
import AuthModal from "./AuthModal";

export default function AuthBar() {
  const [mode, setMode] = useState(null); // "login" | "signup" | null

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950">
        <h1 className="text-lg font-semibold">Chat App</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setMode("login")}
            className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className="px-3 py-1 bg-green-600 rounded hover:bg-green-500"
          >
            Signup
          </button>

          <button className="px-3 py-1 bg-red-600 rounded hover:bg-red-500">
            Logout
          </button>

          {/* TODO:
            - hide login/signup if logged in
            - show user info
            - wire logout
          */}
        </div>
      </div>

      {mode && (
        <AuthModal
          mode={mode}
          onClose={() => setMode(null)}
          switchMode={setMode}
        />
      )}
    </>
  );
}