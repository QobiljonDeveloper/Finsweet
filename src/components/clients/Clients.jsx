import React from "react";
import profileLogo from "../../assets/profile.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Clients = () => {
  return (
    <section className="py-32 bg-[#F9FAFD]">
      <div className="container">
        {/* Clients wrapper */}

        <div className="flex justify-between">
          {/* Left side */}
          <div className="max-w-[330px]">
            <h3 className="font-semibold text-[38px] text-[#282938] mb-4">
              What our clients say about us
            </h3>
            <p className="font-normal text-[16px] text-[#282938]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-12 max-w-[800px]">
            <h5 className="font-medium text-[32px] leading-12">
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h5>
            {/* profile */}
            <div className="flex justify-between  items-center">
              {/* Profile texts */}
              <div className="flex gap-3.5">
                <img src={profileLogo} alt="" />
                <div className="">
                  <p className="font-normal text-[#282938] text-[18px]">
                    Jenny Wilson
                  </p>

                  <p className="font-normal text-[#282938] text-[12px]">
                    Vice President
                  </p>
                </div>
              </div>

              {/* Profile buttons */}
              <div className="flex gap-2.5 items-center">
                <button className="w-12 h-12 bg-white rounded-full grid place-items-center text-[#7E7F87]">
                  <IoIosArrowBack />
                </button>
                <button className="w-12 h-12 bg-[#5239FA] rounded-full grid place-items-center text-white">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
