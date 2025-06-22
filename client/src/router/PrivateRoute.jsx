import React, { use } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { auth } = use(AuthContext);
  const location = useLocation();
  if (auth) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
