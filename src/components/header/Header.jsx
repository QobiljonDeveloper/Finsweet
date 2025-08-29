import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-[#1C1E53] fixed w-full z-40">
      <div className="container">
        <nav className="h-[92px] py-8 flex justify-between items-center">
          {/* Header logo */}
          <div className="">
            <img src={logo} alt="" />
          </div>
          {/* Header links */}
          <ul className="flex gap-10 items-center text-[#BBBBCB]">
            <li className="hover:text-white hover:underline decoration-1 ">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white hover:underline decoration-1 ">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="hover:text-white hover:underline decoration-1 ">
              <Link to="/pricing">Pricing</Link>
            </li>

            <li className="hover:text-white hover:underline decoration-1 ">
              <Link to="/work">Work</Link>
            </li>
            <li className="hover:text-white hover:underline decoration-1 ">
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="py-4 px-12 bg-transparent border border-solid border-[#494A72] rounded-full"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
