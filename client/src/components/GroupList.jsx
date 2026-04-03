import { useEffect, useState } from "react";
import {fetchGroups, createGroup} from "../api/apis";

export default function GroupList() {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = async () => {
    try {
      if (!newGroup.trim()) return;
  
      let data = {
        name: newGroup,
        createdBy: 6 //TODO: use logged in userid after auth
      }
  
      await createGroup(data);
  
      // TODO:
      // - update via socket or refetch
  
      setGroups([...groups, newGroup]);
      setNewGroup("");
      setIsCreating(false);

    } catch (err) {
      console.log(err);
    } 
  };

  // TODO: handle duplicate group error

  useEffect(() => {
    const fetch = async () => {
      let groups = await fetchGroups();
      setGroups(groups.data);
    }

    fetch();
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-800 flex justify-between items-center">
        <h2 className="font-semibold">Groups</h2>

        <button
          onClick={() => setIsCreating(true)}
          className="text-sm px-2 py-1 bg-indigo-600 rounded hover:bg-indigo-500"
        >
          +
        </button>
      </div>

      {/* Create Group Input */}
      {isCreating && (
        <div className="p-3 border-b border-gray-800 space-y-2">
          <input
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            placeholder="Group name..."
            className="w-full px-2 py-1 bg-gray-800 rounded outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
          />

          <div className="flex gap-2">
            <button
              onClick={handleCreate}
              className="flex-1 py-1 bg-green-600 rounded hover:bg-green-500"
            >
              Create
            </button>

            <button
              onClick={() => {
                setIsCreating(false);
                setNewGroup("");
              }}
              className="flex-1 py-1 bg-gray-700 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Group List */}
      <div className="flex-1 overflow-y-auto">
        {groups.map((group, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
          >
            {group.name}
          </div>
        ))}
      </div>
    </div>
  );
}