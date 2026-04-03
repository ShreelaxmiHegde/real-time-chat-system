import { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO:
    // - call signup API
    // - auto-login after success OR redirect to login
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
        className="w-full px-3 py-2 bg-gray-800 rounded outline-none"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="w-full px-3 py-2 bg-gray-800 rounded outline-none"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
        className="w-full px-3 py-2 bg-gray-800 rounded outline-none"
        required
      />

      <button
        type="submit"
        className="w-full py-2 bg-green-600 rounded hover:bg-green-500"
      >
        Signup
      </button>
    </form>
  );
}