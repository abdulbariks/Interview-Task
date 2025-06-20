import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import signup from "../assets/signup.png";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/user/signin", form);
    navigate("/login");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center h-screen ">
      <div className="bg-gradient-to-r from-[#60E5AE] via-[#040612] to-[#60E5AE] h-11/12 rounded shadow items-center flex justify-center">
        <img className="h-72 w-72" src={signup} alt="" />
      </div>
      <div className="h-11/12 bg-white rounded shadow items-center flex justify-center">
        <form onSubmit={handleSubmit} className=" p-6">
          <h2 className="text-4xl font-bold text-center mb-4">SignUp</h2>
          <p className="text-center my-5">
            To Create Account, Please Fill in the From Below.
          </p>
          <input
            type="text"
            placeholder="Name"
            className="input w-full"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="input mt-2 w-full"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="input mt-2 w-full"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit" className="btn bg-[#60E5AE] mt-4 w-full">
            SignUp
          </button>
          <div className="divider divider-neutral">or</div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="font-bold">Log In</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
