import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const tasks = [
  "Sport",
  "Family",
  "Nature",
  "Art and Craft",
  "Meditation",
  "Friends",
];

export default function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedTask, setSelectedTask] = useState("");

  const spin = () => {
    const spins = 4;
    const segmentAngle = 360 / tasks.length;
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomDeg =
      360 * spins + randomIndex * segmentAngle + segmentAngle / 2;
    setRotation(randomDeg);
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setSelectedTask(tasks[randomIndex]);
    }, 4000);
  };

  return (
    <div className="py-10 bg-[#F9FAFB] rounded-2xl -mt-10 w-11/12 mx-auto flex flex-col items-center justify-center">
      <div className="text-xl font-semibold mb-4">Spin Wheel</div>

      <div className="mb-4">
        <label className="mr-2 font-medium">Select Task Category</label>
        <div className="relative inline-block">
          <select className="appearance-none border border-gray-300 rounded px-3 py-2 pr-8">
            <option>Art and Craft</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      <div className="relative w-64 h-64">
        <div
          className="w-full h-full rounded-full border-[10px] border-orange-600 flex items-center justify-center transition-transform duration-[4s] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="absolute w-full h-full">
            {tasks.map((task, i) => {
              const rotate = i * (360 / tasks.length);
              return (
                <div
                  key={task}
                  className="absolute w-1/2 h-1/2 origin-bottom-left"
                  style={{
                    transform: `rotate(${rotate}deg)`,
                    transformOrigin: "100% 100%",
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-end pr-4 text-sm font-medium text-white"
                    style={{
                      backgroundColor: getColor(i),
                      clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                    }}
                  >
                    {task}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-green-500"></div>
        </div>
      </div>

      <button
        onClick={spin}
        disabled={spinning}
        className="mt-6 bg-green-400 text-white px-6 py-2 rounded hover:bg-green-500 disabled:opacity-50"
      >
        Spin
      </button>

      {selectedTask && !spinning && (
        <div className="mt-4 text-lg font-semibold text-green-700">
          Selected Task: {selectedTask}
        </div>
      )}
    </div>
  );
}

function getColor(index) {
  const colors = ["#3498db", "#e67e22", "#f39c12", "#27ae60", "#2ecc71"];
  return colors[index % colors.length];
}
