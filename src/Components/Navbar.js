import React from "react";
import Icon from "../fix-health-icon.png";

const Navbar = () => {
  return (
    <section className="relative mx-auto">
      <nav className="flex justify-between bg-gray-900 text-white w-full">
        <div className="px-5 xl:px-12 py-3 flex w-full items-center">
          <div className="flex mt-4">
            <a href="/" className="text-3xl font-bold font-heading">
              {/* Provide a valid href attribute */}
              <img className="h-12 m-auto" src={Icon} alt="logo" />
            </a>
          </div>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-200">
                Blogs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-200">
                About
              </a>
            </li>
          </ul>

          {/* Header Icons */}
          <div className="hidden xl:flex items-center space-x-5">
            <a href="/" className="md:ml-auto bg-[#2f93a0] hover:bg-[#49becd] text-white font-bold py-2 px-4 rounded-full">
              {/* Provide a valid href attribute */}
              Book Now
            </a>
          </div>
        </div>

        {/* Responsive navbar */}
        <a href="/" className="navbar-burger self-center mr-12 xl:hidden">
          {/* Provide a valid href attribute */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </section>
  );
};

export default Navbar;
