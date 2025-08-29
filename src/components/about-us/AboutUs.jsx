import React from "react";
import about from "../../assets/about.png";
const AboutUs = () => {
  return (
    <section className="pt-40">
      <div className="container">
        {/* About us wrapper */}
        <div className="flex justify-between">
          {/* About us left side */}
          <div className="flex items-start flex-col w-[38%]">
            <p className="font-normal text-[#282938] text-[18px]">About us</p>
            <h1 className="font-semibold text-[54px] text-[#282938] mt-2 mb-8">
              Our designs solve problems
            </h1>
            <p className="font-normal text-[16px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          {/* About us right side */}
          <div className="">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
