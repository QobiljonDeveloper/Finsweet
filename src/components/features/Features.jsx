import React from "react";
import { feature } from "../../static";

const Features = () => {
  return (
    <section className="bg-[#F4F6FC] py-32">
      <div className="container">
        <p className="text-center font-medium text-[16px]">Features</p>
        <h2 className="text-center text-5xl max-w-[500px] justify-self-center leading-16 font-semibold mt-3">
          Design that solves problems, one product at a time
        </h2>
        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-8 mt-10">
          {feature?.map((item) => (
            <div
              className="bg-white py-12 px-9 flex flex-col justify-end items-start"
              key={item.id}
            >
              <img src={item.img} alt="" />
            <h2 className="text-2xl font-normal mt-6">{item.title}</h2>
              <p className="font-normal text-[16px] leading-6 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
