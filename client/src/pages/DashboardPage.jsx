import FiltersBar from "../features/dashboard/FiltersBar";
import ActivityFeed from "../features/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-semibold">Activity</h1>
        <p className="text-gray-500 text-sm">
          Real-time engineering events across your system
        </p>
      </div>

      <FiltersBar />

      <ActivityFeed />

    </div>
  );
}