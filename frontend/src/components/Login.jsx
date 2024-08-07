import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // const notifySignupSuccess = () => toast('Signup successful.');
  // const notifySignupNotSuccess = () => toast('Signup not successful');

  const logVal = document.getElementById("login");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // console.log("Login submitted with data: ", data);

    logVal.value = "Logging in";

    const userInfo = {
      username: data.username,
      password: data.password,
    };
    await axios
      .post(
        "https://the-three-musketeers-backend.onrender.com/user/login",
        userInfo
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          toast.success("Login successful.");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setRedirect(true);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        logVal.value = "Login";
        console.log(err.data);
        toast.error("Error:" + err.response.data.message);
      });
  };

  if (redirect === true) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/* bg-gradient-to-r from-amber-200 to-yellow-100 */}
      <div className="w-72 sm:w-96 flex justify-center items-center flex-col rounded-lg backdrop-sepia-0 shadow-lg">
        {/* bg-white/55 backdrop-sepia-0 */}
        <h1 className="text-3xl font-extrabold text-black mt-10">
          Login Panel
        </h1>
        <form
          className="w-96 gap-2 h-96 loginForm flex justify-center items-center flex-col"
          onSubmit={onSubmitHandler}
        >
          <input
            type="text"
            name="username"
            onChange={onChangeHandler}
            value={data.username}
            placeholder="Username"
            className="border-solid h-10 border-2 border-gray font-bold rounded-md mb-2 px-3 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Password"
            className="border-solid h-10 border-2 border-gray font-bold rounded-md px-3 outline-none"
            required
          />
          <input
            id="login"
            type="submit"
            value="Login"
            className="mt-2 h-10 w-32 font-bold rounded-md text-white px-3 bg-amber-500 hover:bg-amber-600 cursor-pointer"
          />
        </form>
        <p className="text-red-600 font-bold mb-5 px-2 text-xs sm:text-base text-center">
          Note: Only Admins are allowed to access this website, information are{" "}
          <span className="text-blue-500">confidential</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
