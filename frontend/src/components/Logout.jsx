import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const Logout = () => {
  const { authUser, setAuthUser } = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      <Navigate to = "/" />
    } catch (err) {
      toast.error("Error logging out: " + err.message);
    }
  };

  return (
    <div className="text-xl bg-amber-500 hover:bg-amber-600 px-2 py-1 text-white underline-offset-8 rounded-md text-center">
      <Link onClick={handleLogout}>Logout</Link>
    </div>
  );
};

export default Logout;
