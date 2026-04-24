import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Activity", path: "/activity" },
    { name: "Incidents", path: "/incidents" },
    { name: "Integrations", path: "/integrations" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 bg-white hidden md:flex flex-col">

      {/* Section */}
      <div className="p-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
          Workspace
        </h2>

        <nav className="mt-4 space-y-2">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition
                  ${active
                    ? "bg-gray-100 text-black"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom section (upgrade / info) */}
      <div className="mt-auto p-6 border-t border-gray-200">
        <div className="bg-gray-50 rounded-xl p-4 text-sm">
          <p className="font-medium text-gray-800">
            Scale your workflow
          </p>
          <p className="text-gray-500 mt-1 text-xs">
            Unlock advanced insights and integrations.
          </p>
          <button className="mt-3 w-full bg-black text-white py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition">
            Upgrade
          </button>
        </div>
      </div>

    </aside>
  );
}