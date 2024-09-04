import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();

  console.log('Gajsa', isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};