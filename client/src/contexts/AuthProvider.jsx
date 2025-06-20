import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const setAuth = (user) => localStorage.setItem("auth", JSON.stringify(user));
  const logout = () => localStorage.removeItem("auth");

  const authData = {
    setAuth,
    logout,
    auth,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
