import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try{
      setAuthUser({
        ...authUser,
        user: null
      })
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch(err){
      toast.error("Error logging out" + err.message);
    }
  }
  return (
    <>
      <div className="md:hidden text-xl bg-amber-500 hover:bg-amber-600 px-2 py-1 text-white underline-offset-8 rounded-md text-center">
        <Link onClick={handleLogout}>Logout</Link>
      </div>
    </>
  );
};

export default Logout;
