import React from "react";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="py-28 bg-[#1C1E53]">
      <div className="container">
        {/*  Logo Part   */}
        <div className="w-[40%]">
          <img src={logo} alt="" />
          <p className="font-medium text-[16px] text-[#D2D2DC] mt-6 mb-[86px] max-w-[400px] leading-7">
            We are always open to discuss your project and improve your online
            presence.
          </p>

          {/* Contacts Part */}
          <div className="bg-[#FCD980] py-[18px] px-[37px] flex items-center justify-start gap-8">
            {/* Email */}
            <div className="">
              <p className="text-[#292937] font-medium text-[18px]">
                Email me at
              </p>
              <p className="text-[#504B47] text-[16px] font-normal">
                contact@website.com
              </p>
            </div>

            {/* Call us */}
            <div className="">
              <p className="text-[#292937] font-medium text-[18px]">Call us</p>
              <p className="text-[#504B47] text-[16px] font-normal">
                0927 6277 28525
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
