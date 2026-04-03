import AuthBar from "./components/AuthBar";
import GroupList from "./components/GroupList";
import MessageBoard from "./components/MessageBoard";

export default function App() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Auth Section */}
      <AuthBar />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Groups Sidebar */}
        <div className="w-1/4 border-r border-gray-800">
          <GroupList />
        </div>

        {/* Chat Area */}
        <div className="flex-1">
          <MessageBoard />
        </div>
      </div>
    </div>
  );
}