import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Model = () => {
  const [lastUpdatedModel, setLastUpdatedModel] = useState({});
  const [increment, setIncrement] = useState("");
  const [rating, setRating] = useState("");
  const [user, setUser] = useState("");
  const [userid, setUserid] = useState("");
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchLastUpdatedModel = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/models/lastUpdatedModel"
        );
        setLastUpdatedModel(response.data.model);
        setAverageRating(response.data.averageRating.toFixed(2));
      } catch (error) {
        console.error(
          "Error fetching last updated model and average rating:",
          error
        );
      }
    };

    fetchLastUpdatedModel();

    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      setUser(userObject.fullname);
      setUserid(userObject.id);
    }
  }, []);

  const handleIncrementChange = (event) => {
    setIncrement(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const data = {
      increment: parseInt(increment),
      rating: parseInt(rating),
      user: userid
    };
    try {
      const response = await axios.post(
        "https://the-three-musketeers-backend.onrender.com/models/model",
        data
      );

      toast.success("Models updated successfully")

      // console.log("Data saved successfully:", response.data);

      setLastUpdatedModel({
        increment: response.data.model.increment,
        rating: response.data.model.rating,
        updatedAt: response.data.model.updatedAt,
      });

      setIncrement("");
      setRating("");
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      <div className="iptBox h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-4 font-bold">
          Hey <span className="text-amber-500">{user}</span> :)
        </h1>
        <p className="mb-2">
          With the average rating of :{" "}
          <span className="text-amber-500">"{averageRating}"</span>,
        </p>
        <p className="mb-8">
          Total models are :{" "}
          <span className="text-amber-500">"{lastUpdatedModel.increment}"</span>
        </p>
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex flex-col mb-10 justify-center items-center">
            <label htmlFor="increment" className="text-xl">
              Change it to:
            </label>
            <input
              type="number"
              id="increment"
              name="increment"
              value={increment}
              onChange={handleIncrementChange}
              required
              className="border-2 border-gray-300 outline-none px-2 h-6 w-52 rounded-md dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="rating" className="text-2xl">
              What was their average rating?
            </label>
          </div>
          <div className="lg:flex gap-5 text-center text-xl font-extrabold mt-5 mb-5">
            {[...Array(10)].map((_, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`rating-${index + 1}`}
                  name="rating"
                  value={index + 1}
                  onChange={handleRatingChange}
                  required
                  className="mx-5"
                />
                <label
                  htmlFor={`rating-${index + 1}`}
                  className={`text-${index + 1}-500`}
                >
                  {index + 1}
                </label>
                <br />
              </React.Fragment>
            ))}
          </div>
          <button
            type="submit"
            className="border-2 border-blue-500 h-10 w-36 rounded-md bg-blue-500 text-white font-bold"
          >
            Submit
          </button>
        </form>
        <span className="text-sm text-amber-500 font-bold mt-2">
          Note: Records are being tracked
        </span>
      </div>
    </div>
  );
};

export default Model;
