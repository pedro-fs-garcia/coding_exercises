import { useAuth } from "../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";
import User from "../models/User";

const ProtectedRoute = () => {
    //const { user } = useAuth();
    const user:User|null = JSON.parse(localStorage.getItem('user') || "null");
    return user ? <Outlet /> : <Navigate to="/login" />;
  };
  
  export default ProtectedRoute;