import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthModal({ mode, onClose, switchMode }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-gray-900 w-96 p-6 rounded-lg shadow-lg border border-gray-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {mode === "login" ? "Login" : "Signup"}
          </h2>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* Form */}
        {mode === "login" ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}

        {/* Switch */}
        <div className="mt-4 text-sm text-gray-400 text-center">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => switchMode("signup")}
                className="text-blue-400 hover:underline"
              >
                Signup
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => switchMode("login")}
                className="text-blue-400 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}