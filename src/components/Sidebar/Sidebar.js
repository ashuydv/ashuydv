import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font w-full fixed z-50">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-white">Home</Link>
            <Link to='/about' class="mr-5 hover:text-white">About</Link>
            <Link to="/services" class="mr-5 hover:text-white">Services</Link>
            <Link to="/" class="mr-5 hover:text-white">Experiences</Link>
            <Link to="/" class="mr-5 hover:text-white">Works</Link>
            <Link to="/" class="mr-5 hover:text-white">Contact</Link>
          </nav>
          <button class="inline-flex items-center bg-gradient-to-tr from-pink-600 to-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0 text-white shadow-inner ">
            Mail me
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
