import React, { useState, useEffect } from "react";
import AddNewTask from "../modal/AddNewTask";
import axios from "axios";

const statusStyles = {
  Pending: "text-pink-500 bg-pink-100",
  InProgress: "text-yellow-600 bg-yellow-100",
  Done: "text-green-600 bg-green-100",
};
const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div className="p-6 bg-[#F9FAFB] rounded-2xl -mt-10 w-11/12 mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-xl font-semibold text-gray-800">All Task List</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <select className="border border-gray-300 rounded px-4 py-2 text-sm">
            <option>Select Task Category</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2 text-sm">
            <option>All Task</option>
          </select>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#00E396] text-white px-4 py-2 rounded hover:bg-[#00c47c] transition"
          >
            + Add New Task
          </button>
        </div>
        <AddNewTask
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 bg-[#00E396] text-white rounded-full flex items-center justify-center font-bold">
                K
              </div>
              <button className="text-red-400 hover:text-red-600 transition">
                🗑️
              </button>
            </div>

            <h3 className="text-md font-semibold text-gray-900 mt-4">
              {task.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{task.description}</p>

            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {task.user ? (
                  <img
                    src={task.user}
                    alt="user"
                    className="w-5 h-5 rounded-full"
                  />
                ) : (
                  <span>📅</span>
                )}
                <span>{task.date}</span>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${
                  statusStyles[task.status]
                }`}
              >
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
