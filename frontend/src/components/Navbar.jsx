import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ttmlogo from "../assets/images/ttm-logo.png";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout.jsx";

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSticky, setIsSticky] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // const handleDropdownToggle = (e) => {
  //   if(e.isClicked === true) {
  //     document.getElementById("dropdown").closest();
  //   }
  // }

  const authUser = localStorage.getItem("Users");
  console.log(authUser);

  useEffect(() => {
    const element = document.documentElement;
    const body = document.body;

    if (theme === "dark") {
      element.classList.add("dark");
      body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDarkModeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleToggle = () => {
    setIsDropdown((prevDropdown) => !prevDropdown);
  };

  return (
    <>
      <nav
        className={`flex h-16 w-full justify-between items-center px-10 bg-white lg:px-20 fixed top-0 z-10 dark:bg-slate-900 dark:text-white ${
          isSticky ? "bg-slate-100 dark:bg-slate-900 transition-all" : "bg-white"
        }`}
      >
        <div className="md:hidden mt-1 relative z-10">
          <button onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isDropdown && (
            <div className="dropdown">
              <ul className="w-36 py-2 rounded-md mt-24 bg-gray-500 text-white">
                <li className="mt-2 h-8 text-center rounded-md font-semibold hover:bg-gray-300">
                  <Link to="/chat">Chat</Link>
                </li>
                <li className="mt-2 h-8 text-center rounded-md font-semibold hover:bg-gray-300">
                  <Link to="/model">Models</Link>
                </li>
                <li className="mt-2 h-8 text-center rounded-md font-semibold hover:bg-gray-300">
                  <Link to="/history">History</Link>
                </li>
                <li className="mt-2 h-8 text-center rounded-md font-semibold hover:bg-gray-300">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-1/2 absolute ml-7 md:relative md:ml-0">
          <Link to="/">
            <img src={ttmlogo} alt="T T M" className={`w-16 h-16 ${theme === "dark" ? "logo-dark" : "logo-light"}`} />
          </Link>
        </div>
        <div className="sm:w-0 w-1/2 flex justify-end gap-5">
          {!isDropdown && (
            <label className="w-7 h-7 swap swap-rotate mt-1 sm:relative">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={handleDarkModeToggle}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={handleDarkModeToggle}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          )}
        </div>
        {authUser ? <Logout /> : (
        <div className="md:hidden text-xl bg-amber-500 hover:bg-amber-600 px-2 py-1 text-white underline-offset-8 rounded-md text-center">
          <Link to="/login">Login</Link>
        </div>
        )}
        <div className="justify-between w-2/5 hidden md:flex">
          <ul className="flex justify-between w-full items-center">
            <li className="text-xl hover:underline underline-offset-8 rounded-md text-center">
              <Link to="/chat">Chat</Link>
            </li>
            <li className="text-xl hover:underline underline-offset-8 rounded-md text-center">
              <Link to="/model">Models</Link>
            </li>
            <li className="text-xl hover:underline underline-offset-8 rounded-md text-center">
              <Link to="/history">History</Link>
            </li>
            <li className="text-xl hover:underline underline-offset-8 rounded-md text-center">
              <Link to="/about">About</Link>
            </li>
            {authUser ? <Logout /> : (
              <li className="text-xl bg-amber-500 hover:bg-amber-600 px-2 py-1 text-white underline-offset-8 rounded-md text-center">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;