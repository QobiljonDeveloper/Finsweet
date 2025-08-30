import React from "react";
import { faq } from "../../static";

const Faq = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Faq wrapper */}
        <div className="flex  items-start">
          {/* Left side */}
          <div className="w-[40%]">
            <h2 className="text-5xl text-[#282938] font-semibold leading-16 max-w-[70%]">
              Frequently asked questions
            </h2>
            <p className="text-[#2405F2] text-[18px] font-normal mt-4">
              Contact us For More Info
            </p>
          </div>
          {/* Right side */}
          <div className="w-[60%]">
            {faq?.map((item) => (
              <div
                className="border-b-1 border-solid border-[#C6C2EA] flex items-center py-8 px-6"
                key={item.id}
              >
                <h6 className="text-[#2405F2] text-[24px] font-normal">
                  {item.number}
                </h6>
                <div className="flex justify-between w-full ml-14 cursor-pointer select-none">
                  <h6 className="font-normal text-[24px] text-[#282938]">
                    {item.title}
                  </h6>
                  <img src={item.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
