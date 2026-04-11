import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-56 border-r border-gray-800 flex flex-col">
      <div className="p-4 text-lg font-semibold">⚡</div>
      <div className="flex-1 space-y-2 px-2">
        <div onClick={() => navigate("/")} className="h-10 flex items-center px-3 hover:bg-gray-800 rounded-lg cursor-pointer text-sm">
          Dashboard
        </div>
        <div onClick={() => navigate("/get-started")} className="h-10 flex items-center px-3 hover:bg-gray-800 rounded-lg cursor-pointer text-sm">
          Get Started
        </div>
      </div>
    </div>
  );
}