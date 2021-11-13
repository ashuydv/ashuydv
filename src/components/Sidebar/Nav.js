import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-black shadow text-gray-300 z-50 rounded-b-md fixed w-full">
        <div className=" container mx-auto p-4">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a
                  href="#"
                  class="flex title-font font-medium items-center md:justify-start justify-center text-white"
                >
                  <img src={logo} className="w-10 h-10 rounded-full" alt="" />
                  <span class="ml-3 text-xl">Ashutosh</span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className=" ml-64 flex items-baseline space-x-4">
                  <Link to="/" class="mr-0 hover:text-red-300">
                    Home
                  </Link>
                  <Link to="/about" class="mr-5 hover:text-red-300">
                    About
                  </Link>
                  <Link to="/services" class="mr-5 hover:text-red-300">
                    Services
                  </Link>
                  <Link to="/experiences" class="mr-5 hover:text-red-300">
                    Experiences
                  </Link>
                  <Link to="/works" class="mr-5 hover:text-red-300">
                    Works
                  </Link>
                  <Link to="/contact" class="mr-5 hover:text-red-300">
                    Contact
                  </Link>
                </div>
              </div>
              <a href="mailto:ashu.ydv2001@gmail.com">
                <button class="items-center bg-gradient-to-br from-red-600 to-red-900 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0 text-white shadow-inner mx-auto ml-64 w-28 hidden md:block">
                  Email me!
                </button>
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 py-4 space-y-1 flex items-baseline flex-col transition"
              >
                <Link to="/" class="mr-5 hover:text-red-300 px-4 py-1">
                  Home
                </Link>
                <Link to="/about" class="mr-5 hover:text-red-300 px-4 py-1">
                  About
                </Link>
                <Link to="/services" class="mr-5 hover:text-red-300 px-4 py-1">
                  Services
                </Link>
                <Link to="/experiences" class="mr-5 hover:text-red-300 px-4 py-1">
                  Experiences
                </Link>
                <Link to="/works" class="mr-5 hover:text-red-300 px-4 py-1">
                  Works
                </Link>
                <Link to="/contact" class="mr-5 hover:text-red-300 px-4 py-1">
                  Contact
                </Link>
                <a href="mailto:ashu.ydv2001@gmail.com">
              
                <button class="inline-flex items-center bg-gradient-to-br from-red-600 to-red-900 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0 text-white shadow-inner mx-auto">
                  Mail me
              
              </button>
              </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
