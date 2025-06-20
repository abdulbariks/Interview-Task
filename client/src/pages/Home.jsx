import React from "react";
import TaskList from "./TaskList";
import Spin from "./Spin";

const Home = () => {
  return (
    <div>
      <TaskList />
      <Spin />
    </div>
  );
};

export default Home;
