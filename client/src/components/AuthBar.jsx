import { useState } from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "../auth/useAuth";

export default function AuthBar() {
  const [mode, setMode] = useState(null); // "login" | "signup" | null

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout();
  }

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950">
        <h1 className="text-lg font-semibold">Chat App</h1>

        <div className="flex gap-2">
          {!user && (
            <div className="flex py-4">
              <button
                onClick={() => setMode("login")}
                className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
              >Login</button>

              <button
                onClick={() => setMode("signup")}
                className="px-3 py-1 bg-green-600 rounded hover:bg-green-500"
              >Signup</button>
            </div>
          )}

          {user && (
            <div className="flex flex-col">
            <p>{user.username}</p>
            <button
              onClick={() => handleLogout()}
              className="px-3 py-1 bg-red-600 rounded hover:bg-red-500"
            >Logout</button>
            </div>
          )}
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