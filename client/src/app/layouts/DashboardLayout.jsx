import Navbar from "../../../components/layouts/Navbar";
import Sidebar from "../../../components/layouts/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex flex-col bg-gray-50">

      {/* Top Navbar */}
      <Navbar />

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}