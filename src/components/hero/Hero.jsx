import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="bg-[#1C1E53]">
      <div className="container">
        {/* Hero wrapper */}
        <div className="flex items-center justify-between">
          {/* Hero content */}
          <div className="w-[40%]">
            <h1 className="text-white text-[54px] font-sans">
              Building stellar websites for early startups
            </h1>
            <p className="text-[#BBBBCA] text-[16px] mt-6 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            {/* Hero Content Buttons */}
            <div className="flex items-center gap-10">
              <button className="py-4 px-14 bg-[#FCD980] rounded-full text-[18px] hover:cursor-pointer hover:bg-transparent border      duration-300 ease-in-out border-solid border-transparent hover:border hover:border-solid hover:border-[#FCD980] hover:text-white">
                View our work
              </button>
              <Link
                to="/pricing"
                className="flex items-center text-[16px] text-white gap-4  hover:underline decoration-2"
              >
                View Pricing <FaArrowRightLong />
              </Link>
            </div>
          </div>
          {/* Hero img */}
          <div className="max-w-[50%]">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
