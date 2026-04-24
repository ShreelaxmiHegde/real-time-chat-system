import { useState } from "react";

const mockEvents = [
  {
    id: 1,
    type: "deploy",
    title: "Deployed to production",
    repo: "api-service",
    time: "2 min ago",
    status: "success",
  },
  {
    id: 2,
    type: "error",
    title: "Unhandled exception in /payments",
    repo: "backend",
    time: "5 min ago",
    status: "critical",
  },
  {
    id: 3,
    type: "commit",
    title: "Fix: race condition in queue worker",
    repo: "worker-service",
    time: "10 min ago",
    status: "info",
  },
];

export default function ActivityFeed() {
  const [events] = useState(mockEvents);

  return (
    <div className="space-y-4">

      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
        >
          <div className="flex items-start justify-between">

            {/* LEFT */}
            <div>
              <p className="text-sm font-medium text-gray-900">
                {event.title}
              </p>

              <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                <span>{event.repo}</span>
                <span>•</span>
                <span>{event.time}</span>
              </div>
            </div>

            {/* RIGHT STATUS */}
            <StatusBadge status={event.status} />
          </div>

          {/* OPTIONAL ACTION */}
          {event.status === "critical" && (
            <div className="mt-4 flex gap-2">
              <button className="text-xs bg-black text-white px-3 py-1.5 rounded-md">
                Investigate
              </button>
              <button className="text-xs border px-3 py-1.5 rounded-md">
                Ignore
              </button>
            </div>
          )}
        </div>
      ))}

    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    success: "bg-green-100 text-green-700",
    critical: "bg-red-100 text-red-700",
    info: "bg-gray-100 text-gray-600",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-md ${styles[status]}`}>
      {status}
    </span>
  );
}