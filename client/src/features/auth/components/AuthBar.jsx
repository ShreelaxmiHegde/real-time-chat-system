import { useState } from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "../../auth/useAuth";

export default function AuthBar() {
  const [mode, setMode] = useState(null); // "login" | "signup" | null

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout();
  }

  return (
    <>
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800 bg-gray-950">

        {/* Left: App Name */}
        <h1 className="text-lg font-semibold tracking-tight text-gray-100">
          Chat App
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {!user && (
            <>
              <button
                onClick={() => setMode("login")}
                className="px-4 py-1.5 text-sm font-medium text-gray-200 border border-gray-700 rounded-md hover:bg-gray-800 transition"
              >
                Login
              </button>

              <button
                onClick={() => setMode("signup")}
                className="px-4 py-1.5 text-sm font-medium bg-blue-600 rounded-md hover:bg-blue-500 transition"
              >
                Signup
              </button>
            </>
          )}

          {user && (
            <div className="flex items-center gap-3">

              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm font-semibold">
                {user.username?.charAt(0).toUpperCase()}
              </div>

              {/* Username + Status */}
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium text-gray-100">
                  {user.username}
                </span>
                <span className="text-xs text-green-400">
                  ● Online
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-sm font-medium bg-red-600 rounded-md hover:bg-red-500 transition"
              >
                Logout
              </button>

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