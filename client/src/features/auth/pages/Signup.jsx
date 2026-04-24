import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import FormInput from "./FormInput";
import { useAuth } from "../../auth/useAuth";
import { signup } from "../../auth/auth.service";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SIGNUP", form);
    try {
      const data = await signup(form);
      login(data);
      navigate("/create-org");
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your engineering workspace"
    >
      <form onSubmit={handleSubmit} className="space-y-4">

        <FormInput label="Username" name="username" onChange={handleChange} />
        <FormInput label="Email" name="email" type="email" onChange={handleChange} />
        <FormInput label="Password" name="password" type="password" onChange={handleChange} />

        <button className="w-full bg-black text-white py-2 rounded-lg">
          Continue
        </button>

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium">Login</Link>
        </p>

      </form>
    </AuthLayout>
  );
}