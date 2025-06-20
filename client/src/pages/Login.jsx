import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { setAuth } from "../auth/auth";
import axios from "axios";
import login from "../assets/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user/login", { email, password });
      setAuth({ email });
      navigate("/");
    } catch (err) {
      console.log(err);

      alert("Login failed");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center h-screen ">
      <div className="bg-gradient-to-r from-[#60E5AE] via-[#040612] to-[#60E5AE] h-11/12 rounded shadow items-center flex justify-center">
        <img className="h-72 w-72" src={login} alt="" />
      </div>
      <div className="h-11/12 bg-white rounded shadow items-center flex justify-center ">
        <form onSubmit={handleLogin} className=" p-6  ">
          <h2 className="text-4xl font-bold text-center mb-4">Login</h2>
          <p className="text-center my-5">
            WelcomeBack,Please Enter your Details to Log In.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="input w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input w-full mt-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/reset-password"}>
            <p className="text-right pt-3">Forgot password ?</p>
          </Link>
          <button type="submit" className="btn mt-4 w-full bg-[#60E5AE]">
            Login
          </button>
          <div className="divider divider-neutral">or</div>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link to={"/signup"}>
              <span className="font-bold">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
