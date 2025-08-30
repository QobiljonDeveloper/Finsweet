import React from "react";
import { templates } from "../../static";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolios = () => {
  return (
    <section className="py-24">
      <div className="container">
        {/* Categoriy */}
        <div className="flex items-center justify-center gap-8 ">
          <p className="text-[#2405F2] text-[18px] font-normal cursor-pointer">
            All
          </p>
          <p className="text-[#7A7A83] text-[18px] font-normal cursor-pointer">
            UI Design
          </p>
          <p className="text-[#7A7A83] text-[18px] font-normal cursor-pointer">
            Webflow Design
          </p>
          <p className="text-[#7A7A83] text-[18px] font-normal cursor-pointer">
            Figma Design
          </p>
        </div>
        {/* Wrapper */}
        <div className="grid grid-cols-2 gap-9 mt-12">
          {templates?.map((item) => (
            <div className="" key={item.id}>
              <img src={item.img} alt="" />
              <h3 className="font-semibold text-[38px] text-[#282938] mt-6">
                {item.title}
              </h3>
              <p className="font-normal text-[16px] text-[#696973] max-w-[90%] leading-7 mt-3 mb-6">
                {item.description}
              </p>
              <div className="flex gap-4 items-center cursor-pointer">
                <p className="font-normal text-[16px] text-[#282938]">
                  {item.button}
                </p>
                <FaArrowRightLong className="text-[#282938]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
