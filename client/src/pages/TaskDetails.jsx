import axios from "axios";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router";
import AddNewTask from "../modal/AddNewTask";
import UpdateTask from "../modal/UpdateTask";

const TaskDetails = () => {
  const [status, setStatus] = useState("Done");
  const navigate = useNavigate();
  const tasksDetails = useLoaderData();
  console.log(tasksDetails);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { _id, title, description } = tasksDetails;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://server-indol-zeta.vercel.app/tasks/${id}`);
      alert("Task deleted");
      navigate("/");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete");
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow-md border -mt-10">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-lg font-semibold">Task Details</h2>
        <div className="flex gap-4 items-center text-sm font-medium">
          <span className="text-purple-600">20 Points</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200"
          >
            ✏️ Edit Task
          </button>
          <Link to={"/"}>
            <button className="bg-green-200 text-green-800 px-3 py-1 rounded hover:bg-green-300">
              Back
            </button>
          </Link>
        </div>
        <UpdateTask
          taskId={_id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <div className="flex gap-6 items-start">
        <div className="bg-gray-100 p-4 rounded-full text-3xl">🎨</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-gray-500" />
              <div>
                <div className="text-sm text-gray-500">End Date</div>
                <div className="font-medium text-gray-800">
                  Friday, April 19 - 2024
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Status</span>
              <span className="font-semibold text-yellow-600">
                ● InProgress
              </span>
            </div>
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium block mb-1 text-gray-700">
              Change Status
            </label>
            <select
              className=" border rounded px-3 py-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All Task">All Task</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Pending">Pending</option>
              <option value="Collaborative Task">Collaborative Task</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="mt-6 flex items-end justify-end gap-4">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-100 text-red-600 font-semibold px-4 py-2 rounded hover:bg-red-200"
            >
              Delete Task
            </button>
            <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
