import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import login from "../assets/login.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, logout } = use(AuthContext);
  const user = auth?.email;
  console.log(user);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="inset-0 h-42 bg-gradient-to-r from-[#60E5AE] via-[#040612] to-[#60E5AE] text-white">
      <img
        src={login}
        alt="Dashboard Illustration"
        className="absolute h-32 w-32 right-0 top-0 object-cover opacity-10"
      />
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/task-list"}>Task list</NavLink>
              </li>
              <li>
                <NavLink to={"/spin"}>Spin</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <NavLink to={"/"} className="text-xl hidden md:block lg:block">
              Tasko
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/task-list"}>Task List</NavLink>
            </li>
            <li>
              <NavLink to={"/spin"}>Spin</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {!user ? (
            <div className="flex gap-5 cursor-pointer">
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink to={"/signup"}>SignUp</NavLink>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>{user}</li>
                <li>
                  <button onClick={handleLogout}> Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="ml-16 ">
        <h4 className="text-[#08f793]">{user}</h4>
        <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
      </div>
    </div>
  );
};

export default Navbar;
