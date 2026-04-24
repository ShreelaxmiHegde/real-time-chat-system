import { useState } from "react";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "../../auth/useAuth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mode, setMode] = useState(null);
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold">
              E
            </div>
            <span className="font-semibold">Engyne</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <button onClick={() => setMode("login")} className="text-sm">Login</button>
                <button onClick={() => setMode("signup")} className="text-sm">Signup</button>
                <Link to="/get-started" className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                  Get Started
                </Link>
              </>
            ) : (
              <button onClick={logout} className="text-sm">Logout</button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="w-72 bg-white h-full p-6 flex flex-col">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="self-end text-xl"
            >
              ✕
            </button>

            {/* Nav Links */}
            <nav className="mt-6 flex flex-col gap-4 text-gray-700">
              <a href="#">Product</a>
              <a href="#">Pricing</a>
              <a href="#">Docs</a>
              <Link to="/dashboard">Dashboard</Link>
            </nav>

            {/* Auth */}
            <div className="mt-auto flex flex-col gap-3">
              {!user ? (
                <>
                  <button onClick={() => setMode("login")} className="border py-2 rounded-lg">
                    Login
                  </button>
                  <button onClick={() => setMode("signup")} className="border py-2 rounded-lg">
                    Signup
                  </button>
                  <Link to="/get-started" className="bg-black text-white py-2 rounded-lg text-center">
                    Get Started
                  </Link>
                </>
              ) : (
                <button onClick={logout} className="border py-2 rounded-lg">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}

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