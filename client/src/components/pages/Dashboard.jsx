import { useEffect, useState } from "react";
import EventStream from "../../components/events/EventStream";
import MetricsBar from "../../components/metrics/MetricsBar";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [metrics, setMetrics] = useState({
    users: 10,
    latency: 40,
    throughput: 2000,
    events: 120,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = {
        id: Date.now(),
        type: Math.random() > 0.5 ? "error" : "metric",
        service: "api",
        time: new Date().toLocaleTimeString(),
        message: "Simulated system event",
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 50)]);

      setMetrics((prev) => ({
        ...prev,
        latency: prev.latency + Math.floor(Math.random() * 5 - 2),
        events: prev.events + Math.floor(Math.random() * 10 - 5),
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-lg font-semibold">Live Event Stream</h1>
      <MetricsBar metrics={metrics} />
      <EventStream events={events} />
    </div>
  );
}