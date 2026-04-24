import { useState } from "react";
import AuthLayout from "./AuthLayout";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";

export default function CreateOrg() {
  const [form, setForm] = useState({
    orgName: "",
    projectName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CREATE ORG", form);

    // API → create org
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Create your workspace"
      subtitle="This will be your team’s central hub"
    >
      <form onSubmit={handleSubmit} className="space-y-4">

        <FormInput
          label="Organization Name"
          name="orgName"
          placeholder="Acme Inc"
          onChange={handleChange}
        />

        <FormInput
          label="First Project (optional)"
          name="projectName"
          placeholder="api-service"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white py-2 rounded-lg">
          Create Workspace
        </button>

      </form>
    </AuthLayout>
  );
}