import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { team } from "../../static";

const Team = () => {
  return (
    <section className="bg-[#F4F6FC] py-32">
      <div className="container">
        <h2 className="font-semibold text-[#1D2130] text-[48px] text-center mb-12">
          Meet our team
        </h2>
        <div className="grid grid-cols-4 gap-8">
          {team?.map((item) => (
            <div
              key={item.id}
              className="py-12 px-16 bg-white flex flex-col items-center"
            >
              <div className="relative group w-full flex justify-center">
                <img src={item.img} alt="" className="w-full" />
                {item.id == 1 && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[rgba(255,255,255,0.35)] from-[42%] to-[rgba(82,57,250,0.79)] flex items-end gap-4">
                    <div className="flex mb-7 mx-auto gap-2.5 justify-end items-end">
                      <FaFacebook className="text-xl text-white cursor-pointer" />
                      <FaInstagram className="text-xl text-white cursor-pointer" />
                      <FaTwitter className="text-xl text-white cursor-pointer" />
                    </div>
                  </div>
                )}
              </div>

              {/* Name & Bio */}
              <h6 className="mt-8 text-[#1D2130] text-2xl font-medium">
                {item.title}
              </h6>
              <p className="text-[#62646D] font-normal text-[16px]">
                {item.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
