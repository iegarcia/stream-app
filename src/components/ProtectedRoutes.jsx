import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoutes({ children }) {
  const { user } = useAuth();
  console.log(user);

  if (!user) return <Navigate to="/login" />;

  return <>{children} </>;
}
