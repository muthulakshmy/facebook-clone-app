import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useData } from "./pages/DataContext";
const RequireAuth = ({ children }) => {
  const data = useData();
  const location = useLocation();

  if (!data.logName) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireAuth;
