import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import FormInput from "./FormInput";
import { loginUser } from "../../auth/auth.service";
import { useAuth } from "../../auth/useAuth";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LOGIN", form);

    try {
      const data = await loginUser(form);
      login(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to your workspace"
    >
      <form onSubmit={handleSubmit} className="space-y-4">

        <FormInput label="Email" name="email" type="email" onChange={handleChange} />
        <FormInput label="Password" name="password" type="password" onChange={handleChange} />

        <button className="w-full bg-black text-white py-2 rounded-lg">
          Login
        </button>

        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black font-medium">Sign up</Link>
        </p>

      </form>
    </AuthLayout>
  );
}