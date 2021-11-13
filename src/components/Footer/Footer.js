import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";
import logo from "../../assets/img/logo.jpg";

const Footer = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        component={<FaChevronUp />}
        style={{
          color: "white",
          background:
            "linear-gradient(rgba(220, 38, 38, 1), rgba(127, 29, 29, 1))",
          padding: "12px",
          boxShadow: "0px 0px 5px rgba(0,0,0,.5)",
        }}
      />
      <footer className="text-gray-400 bg-black body-font relative rounded-t-lg shadow-md">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="#"
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <img src={logo} className="w-10 h-10 rounded-full" alt="" />
            <span className="ml-3 text-xl">Ashutosh</span>
          </a>
          <span className="flex items-center sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-400 hover:text-red-400"
              href="https://twitter.com/ashu_ydv18"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              className="ml-3 text-gray-400 hover:text-red-400"
              href="https://www.linkedin.com/in/ashutoshyadav3465/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="ml-3 text-gray-400 hover:text-red-400"
              href="https://www.instagram.com/ashu_ydv18/"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              className="ml-3 text-gray-400 hover:text-red-400"
              href="https://www.facebook.com/profile.php?id=100039132562954"
            >
              <i className="fab fa-facebook-f text-sm" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
