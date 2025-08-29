import React from "react";
import card_1 from "../../assets/card.png";
import card_2 from "../../assets/card-2.png";
import card_3 from "../../assets/card-3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <section className="py-14">
      <div className="container">
        {/* Projects wrapper */}
        <div>
          {/* Project Texts */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold">View our projects</h2>
            <p className="flex items-center gap-2  cursor-pointer">
              View More <FaArrowRightLong />
            </p>
          </div>

          {/* Projects Cards */}
          <div className="grid grid-cols-6 grid-rows-4 gap-4">
            <div
              className="col-span-4 row-span-4  bg-cover bg-center relative"
              style={{ backgroundImage: `url(${card_1})` }}
            >
              <div className=" absolute h-full bg-gradient-to-tl from-[#1C1E53]/[0.80] to-[#1C1E53]/[0.42] w-[47%] flex flex-col items-end justify-end">
                <div className="px-14 py-20">
                  <h2 className="font-semibold text-2xl text-white leading-10">
                    Workhub office Webflow Webflow Design
                  </h2>
                  <p className="font-normal text-[16px] text-[#BBBBCB] mt-4 mb-10">
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam
                  </p>
                  <p className="flex items-center gap-4 text-[16px] font-medium cursor-pointer text-[#FCD980]">
                    View project <FaArrowRightLong />
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-start-5 col-span-2 row-start-1 row-span-2  bg-cover bg-center relative"
              style={{ backgroundImage: `url(${card_2})` }}
            >
              <div className="absolute h-full w-full  bg-gradient-to-tl from-[#1C1E53]/[0.80] to-[#1C1E53]/[0.42] flex flex-col justify-end py-20 px-14">
              <div className="w-[60%]">
                <h2 className="font-semibold text-white text-[24px] leading-10 max">Unisaas Website Design</h2>
                <p className="flex items-center gap-4 text-[16px] font-medium cursor-pointer text-[#FCD980]">
                  View project <FaArrowRightLong />
                </p>
              </div>
                
              </div>
            </div>

            <div className="col-start-5 col-span-2 row-start-3 row-span-2">
              <img
                src={card_3}
                alt="Church Project"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
