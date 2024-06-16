import React, { useState, useEffect } from "react";
import bannerImage from "../assets/images/WhatsApp Image 2024-06-11 at 19.41.52_aff227c5.jpg";

const Banner = () => {
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  return (
    <div>
      <div className="w-full h-full overflow-hidden mt-16">
        <div className="w-full h-full md:flex md:h-screen md:flex-row flex flex-col-reverse">
          <div className="left w-full h-1/2 md:flex md:h-full md:w-1/2">
            <img
              src={bannerImage}
              alt="Something went wrong..."
              className="w-full h-full object-cover"
            />
          </div>
          <div className="right md:h-screen md:w-1/2 h-72 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="mainHeading flex flex-col justify-center items-center text-center md:w-1/2 w-screen">
              <span className="lg:text-8xl text-6xl gradient-text-dark opacity-0 animate-reveal">
                The <br />  
                Three <br />
                Musketeers
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-screen px-20 mt-10">
          <h1 className="text-center text-2xl font-bold">
            <span className="text-amber-500">Greetings</span>, Welcome to our side of the world!!!
          </h1>
          <p className="mt-5 mb-28">
            "Hey there, dear friends! 🌟 Welcome to our digital abode, crafted
            with love and passion! 🏡 Take a scroll through our
            virtual moments and explore the wonders we've curated. From captivating stories to inspiring art, there's
            something special waiting for each of us. So kick back, relax, and
            let the adventure begin! 🚀✨"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
