import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // If no token -->> redirect to login page
  if (!token) {
    return <Navigate to="/open-account" replace />;
  }

  // If token exists -->> allow access
  return children;
}

export default ProtectedRoute;
