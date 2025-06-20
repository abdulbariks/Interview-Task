import React from "react";
import { isAuthenticated } from "../auth/auth";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  if (isAuthenticated) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
