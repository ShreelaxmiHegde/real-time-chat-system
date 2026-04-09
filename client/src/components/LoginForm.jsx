import { useState } from "react";
import { loginUser } from "../auth/auth.service";
import { useAuth } from "../auth/useAuth";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);
      login(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
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
        className="w-full py-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        Login
      </button>
    </form>
  );
}