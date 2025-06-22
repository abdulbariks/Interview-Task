import axios from "axios";
import React, { useState } from "react";

const AddNewTask = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    status: "",
  });

  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://server-indol-zeta.vercel.app/tasks/create",
        form
      );
      alert("Task saved successfully!");
      onClose();
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Failed to save task");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 relative shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Add New Task</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Task Title"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            placeholder="Task Description"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            type="date"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <select
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="InProgress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#00E396] text-white px-4 py-2 rounded hover:bg-[#00c47c]"
            >
              Save Task
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
export default AddNewTask;
