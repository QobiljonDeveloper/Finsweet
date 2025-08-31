import React from "react";
import { blogs } from "../../static";
import { FaArrowRightLong } from "react-icons/fa6";

const OurBlogs = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Wrapper */}
        <div className="grid grid-cols-3 gap-8">
          {blogs?.map((item) => (
            <div className="" key={item.id}>
              <img src={item.img} alt="" />
              <p className="font-medium text-[#696973] mt-8 mb-4">
                {item.date}
              </p>
              <h6 className="font-normal text-[#282938] text-2xl mb-4">
                {item.title}
              </h6>
              <p className="text-[16px] text-[#696973] max-w-[90%] leading-7">
                {item.description}
              </p>
              <div className="flex items-center gap-3 mt-6">
                <p className="font-medium text-[16px] text-[#1C1E53]">
                  {item.button}
                </p>
                <FaArrowRightLong className="text-[#1C1E53]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
