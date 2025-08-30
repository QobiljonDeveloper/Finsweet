import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Works = () => {
  return (
    <section className="py-24 bg-[#F4F6FC]">
      <div className="container">
        {/* Wrapper */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#666772] font-medium text-[16px]">
            What we created
          </p>
          <h2 className="text-[#282938] font-semibold text-5xl mt-1 mb-6">
            Our Work Portfolio
          </h2>
          <p className="text-[#666772] font-medium text-[16px] max-w-[52%] text-center mb-8">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex gap-7 items-center">
            <FaFacebook className="text-xl text-[#282938] cursor-pointer" />
            <FaTwitter className="text-xl text-[#282938] cursor-pointer" />
            <FaInstagram className="text-xl text-[#282938] cursor-pointer" />
            <FaLinkedin className="text-xl text-[#282938] cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
