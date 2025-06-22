import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateTask = ({ taskId, isOpen, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    if (isOpen && taskId) {
      axios
        .get(`http://localhost:5000/tasks/${taskId}`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Failed to load task", err));
    }
  }, [isOpen, taskId]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://server-indol-zeta.vercel.app/tasks/${taskId}`,
        form
      );
      alert("Task updated!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
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
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
