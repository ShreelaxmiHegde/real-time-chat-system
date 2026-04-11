import { useParams } from "react-router-dom";

export default function Incident() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold">Incident #{id}</h1>
      <p className="text-sm text-gray-400 mt-2">Detailed incident view (to build)</p>
    </div>
  );
}