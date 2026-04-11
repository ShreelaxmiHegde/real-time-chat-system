export default function MetricsBar({ metrics }) {
  return (
    <div className="flex gap-6 text-xs text-gray-400">
      <span>🟢 {metrics.users} users</span>
      <span>⚡ {metrics.events} events/sec</span>
      <span>📊 {metrics.latency}ms latency</span>
      <span>🚀 {metrics.throughput} msgs/min</span>
    </div>
  );
}