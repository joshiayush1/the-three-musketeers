import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex justify-center items-center flex-col bg-white rounded-md">
          <h1 className="text-4xl font-extrabold text-black mt-10">
            Login Panel
          </h1>
          <div className="w-96 gap-2 h-96 loginForm flex justify-center items-center flex-col">
            <input
              type="username"
              name="username"
              placeholder="Username"
              className="border-solid border-2 border-gray-300 h-10 w-72 font-bold rounded-md mb-2 px-3 outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-solid border-2 border-gray-300 h-10 w-72 font-bold rounded-md px-3 outline-none"
            />
            <input
              type="submit"
              className="h-10 w-32 font-bold rounded-md text-white px-3 bg-blue-600 hover:bg-blue-500 cursor-pointer"
            />
          </div>
          <p className="text-red-600 font-bold">
            Note: Only Admins are allowed to access this
            <br />
            website, information are{" "}
            <span className="text-blue-500">confidential</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
