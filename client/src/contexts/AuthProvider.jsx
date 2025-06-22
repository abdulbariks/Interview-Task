import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const auth = JSON.parse(localStorage.getItem("auth"));
  const setAuth = (user) => localStorage.setItem("auth", JSON.stringify(user));
  const logout = () => localStorage.removeItem("auth");

  const authData = {
    setAuth,
    logout,
    auth,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
