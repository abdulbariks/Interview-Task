import { createBrowserRouter } from "react-router";
import Error from "../components/Error";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthLayout from "../layout/AuthLayout";
import TaskList from "../pages/TaskList";
import Spin from "../pages/Spin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "task-list", Component: TaskList },
      { path: "spin", Component: Spin },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
