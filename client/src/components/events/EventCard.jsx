import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/incident/${event.id}`)}
      className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 cursor-pointer hover:scale-[1.01] transition"
    >
      <div className="text-xs text-gray-400 mb-1">
        {event.type} • {event.service} • {event.time}
      </div>
      <div className="text-sm">{event.message}</div>
    </div>
  );
}