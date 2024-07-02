import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [allModels, setAllModels] = useState([]);

  useEffect(() => {
    const models = async () => {
      await axios
        .post("https://the-three-musketeers-backend.onrender.com/models/allmodels")
        .then((res) => {
          // console.log("Response from backend:", res.data);
          setAllModels(res.data.models);
        })
        .catch((err) => console);
    };
    models();
  }, []);

  const formatISTDate = (utcDate) => {
    const options = {
      timeZone: "Asia/Kolkata",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(utcDate).toLocaleString("en-IN", options);
  };

  return (
    <>
      <div className="flex flex-col pt-16 w-full h-full pb-16">
        {allModels.reverse().map((model, index) => (
          <div
            key={index}
            className=" w-full py-5 text-black text-center flex flex-col justify-center items-center overflow-hidden"
          >
            <p className="dark:text-white">
              <span className="text-amber-500">@{model.user.username}</span>{" "}
              updated model to <span className="text-blue-500">"{model.increment}"</span> at{" "}
              <span className="text-blue-500">"{formatISTDate(model.date)}"</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default History;
