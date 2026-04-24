export default function FiltersBar() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">

      {/* LEFT FILTERS */}
      <div className="flex gap-3">
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>All Repos</option>
        </select>

        <select className="border rounded-md px-3 py-1 text-sm">
          <option>All Events</option>
        </select>

        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Last 24h</option>
        </select>
      </div>

      {/* RIGHT */}
      <input
        placeholder="Search events..."
        className="border rounded-md px-3 py-1 text-sm w-64"
      />
    </div>
  );
}