import React from "react";
import blogs from "../../assets/blogs.png";
const Environment = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Wrapper */}
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-semibold text-5xl text-center max-w-[60%] leading-16">
            A UX Case Study on Creating a Studious Environment for Students
          </h2>
          {/* Texts wrapper */}
          <div className="flex items-center justify-center mb-8 mt-4 gap-1.5">
            <p className="text-[#454551] text-[16px] font-medium">
              Andrew Jonson
            </p>
            <p className="text-[#292937] text-[16px] font-medium">
              Posted on 27th January 2021
            </p>
          </div>
          <img src={blogs} alt="" />
          <p className="font-normal text-[#696973] text-center max-w-[55%] mt-12 mb-4">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <p className="text-[#2405F2] font-normal cursor-pointer select-none">Read more</p>
        </div>
      </div>
    </section>
  );
};

export default Environment;
