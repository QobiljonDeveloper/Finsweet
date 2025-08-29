import React from "react";
import man from "../../assets/man.png";
const Focused = () => {
  return (
    <section className="my-32">
      <div className="container bg-[#F4F5F5] pt-24">
        {/* Focused Wrapper */}
        <div className="">
          {/* Focused Texts */}
          <div className="flex justify-center mb-24 gap-16">
            {/* Focused Texts Left */}
            <div className="w-[37%]">
              <h3 className="text-[#282938] text-[38px] font-semibold mb-4">
                Goal focussed
              </h3>
              <p className="text-[#666670] text-[16px] font-normal text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            {/* Focused Texts right */}
            <div className="w-[37%]">
              <h3 className="text-[#282938] text-[38px] font-semibold mb-4">
                Continuous improvement
              </h3>
              <p className="text-[#666670] text-[16px] font-normal text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          {/* Focused img */}
          <div className="">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focused;
