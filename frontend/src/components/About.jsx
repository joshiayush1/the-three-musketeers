import React from "react";
import Slider from "react-slick";
import Abhay from "../assets/images/WhatsApp Image 2024-06-14 at 19.44.32_ec54637d.jpg";
import Ayush from "../assets/images/WhatsApp Image 2024-06-14 at 19.30.54_2f0cfe59.jpg";
import Bipin from "../assets/images/WhatsApp Image 2024-06-14 at 19.33.14_03529e8f.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen w-full">
      <div className="w-full h-3/4 flex flex-col items-center mb-32 sm:mb-0">
        <h1 className="text-3xl font-bold mt-28 mb-10 text-amber-500">Introducing</h1>
        <div className="sm:h-1/5 sm:w-1/5 w-2/3 h-2/3 gap-10 text-center">
          <Slider {...settings}>
            <div className="AbhayAbout w-full border-gray-700 rounded-md border-2 h-full flex-col flex justify-center items-center">
              <img
                src={Abhay} 
                alt="Abhay Sharma"
                className="w-full h-full rounded-md"
              />
              <h1 className="text-2xl font-bold mt-5">Abhay Sharma</h1>
              <p className="text-amber-500">Pursuing B.P.Th</p>
            </div>
            <div className="AyushAbout w-full border-gray-700 rounded-md border-2 h-full flex flex-col justify-center items-center">
              <img
                src={Ayush}
                alt="Ayush Joshi"
                className="h-full w-full rounded-md"
              />
              <h1 className="text-2xl font-bold mt-5">Ayush Joshi</h1>
              <p className="text-amber-500">Pursuing Bsc.IT</p>
            </div>
            <div className="BipinAbout w-full border-gray-700 rounded-md border-2 h-full flex flex-col justify-center items-center">
              <img
                src={Bipin}
                alt="Bipin Yadav"
                className="h-full w-full rounded-md"
              />
              <h1 className="text-2xl font-bold mt-5">Bipin Yadav</h1>
              <p className="text-amber-500">Pursuing Btech in Robotics</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
