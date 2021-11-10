import React from "react";
import Slider from "react-slick";
import ReactTypingEffect from "react-typing-effect";
import CountUp from "react-countup";
import "./Home.css";
import genie from "../../assets/img/genie.png";
import bdgrowth from "../../assets/img/bdgrowth.png";
import blabs from "../../assets/img/blabs.png";
import brainzeo from "../../assets/img/brainzeo.png";
import event from "../../assets/img/event.png";
import temp from "../../assets/img/temp.png";
import profile from "../../assets/img/profile.png";
import startup from "../../assets/img/startup.svg";
import freelancer from "../../assets/img/freelancer.svg";
import upgrade from "../../assets/img/upgrade.svg";
import web from "../../assets/img/web.svg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slowMo = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    speed: 10000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fadeCustom = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="home">
      <section className="text-gray-400 bg-gray-50 body-font main">
        <div className="container mx-auto flex px-5 lg:py-44 lg:pb-0 md:py-24 md:pb-0 md:flex-row items-center py-40 pb-0 flex-col-reverse">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              <span className=" text-xl">Hello, I'm a</span>
              <br className="inline-block" />
              <ReactTypingEffect
                speed="150"
                eraseSpeed="150"
                eraseDelay="150"
                typingDelay="150"
                smooth
                text={[
                  "Frontend Developer ",
                  "Freelancer ",
                  "Explorer",
                  "Startup Enthusiast",
                  "",
                ]}
              />
            </h1>
            <div className="flex justify-center">
              <a href="./resume.pdf" download>
                <button className="inline-flex text-white bg-gradient-to-br from-red-600 to-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-md shadow-md">
                  Resume
                </button>
              </a>
              <a href="#">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md shadow-md">
                  Hire Me
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10">
            <Slider {...fadeCustom}>
              <img className="w-96 h-96" alt="hero" src={startup} />
              <img className="w-96 h-96" alt="hero" src={upgrade} />
              <img className="w-96 h-96" alt="hero" src={web} />
              <img className="w-96 h-96" alt="hero" src={freelancer} />
            </Slider>
          </div>
        </div>
        <div className="pt-4">
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(139,51,51,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(139,51,51,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(139,51,51,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#dc2626" />
            </g>
          </svg>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="px-0 py-28 mx-auto bg-red-600 text-white">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-gray-100 tracking-widest font-medium title-font mb-2">
              SERVICES I PROVIDE
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-50">
              Build Amazing Websites & Get Your Work Done
            </h1>
          </div>
          <div className="container-2">
            <Slider {...slowMo}>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-transparent border-0 transition p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className=" shadow-2xl w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-50 text-lg title-font font-medium">
                      Get your bugs fixed
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      I can fix bugs related to frontend, i.e. can add
                      responsiveness, add animations, related to html, css,
                      boostrap, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-transparent border-0 transition p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className=" shadow-2xl w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-50 text-lg title-font font-medium">
                      Frontend Development
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Responsive websites built for an optimal user experience
                      that achieves your business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-transparent border-0 transition p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className=" shadow-2xl w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-gray-50 text-lg title-font font-medium">
                      SEO
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Make your website fast, easy to find, and reach the widest
                      audience possible.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-transparent border-0 transition p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className=" shadow-2xl w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-gray-50 text-lg title-font font-medium">
                      Landing Pages
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      I deliver landing pages, that are precise, easy to the eyes, user friendly, responsive and pixel-perfect.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-transparent border-0 transition p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className=" shadow-2xl w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-gray-50 text-lg title-font font-medium">
                      Hosting and Domain
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base"> 
                      I can host your website and connect it to the domain, but the domain will be provided by you.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="flex flex-wrap -m-4"></div>
          <button className="flex mx-auto mt-16 text-black bg-gradient-to-br from-gray-50 to-red-300 shadow-xl border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View More
          </button>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-50 body-font  rounded-xl">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Take a look at some of my works
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Basically, I develop landing pages, I convert PSD/XD/Figma to
              HTML/ReactJs, etc. I try my best to deliver pixel-perfect and UI
              Friendly Websites. Client satisfaction is my main goal. If you are
              looking for the highest quality for your project, don't hesitate
              to contact me.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block shadow-lg"
                  src={brainzeo}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block shadow-lg"
                  src={event}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block shadow-xl"
                  src={genie}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block shadow-xl"
                  src={blabs}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block shadow-lg"
                  src={temp}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block shadow-lg"
                  src={bdgrowth}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-2xl"
            alt="hero"
            src={profile}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Know more about me
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm a Frontend Developer, an open-source enthusiast, a freelancer based in Mumbai, India.
              Currently, I'm pursuing engineering from PVPPCOE. My hobbies are
              reading books, exploring new things, taking up new challenges,
              learning and deep diving into new and upcoming technologies.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gradient-to-br from-red-600 to-red-900 border-0 py-2 px-6 focus:outline-none shadow-xl rounded text-lg">
                Have a Project ?
              </button>
              <button className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none bg-gray-200 rounded text-lg shadow-xl">
                Mail me
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-100 px-4 py-6 rounded-lg shadow-md hover:border-red-600 hover:shadow-lg">
                <i className="fas fa-wrench text-red-700 text-5xl mb-3"></i>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <CountUp start={0} end={12} duration={5} />
                </h2>
                <p className="leading-relaxed">Projects</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-100 px-4 py-6 rounded-lg shadow-md hover:border-red-600 hover:shadow-lg">
                <i className="fas fa-user-tie text-red-700 text-5xl mb-3"></i>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <CountUp start={0} end={100} duration={3} />
                </h2>
                <p className="leading-relaxed">Freelancing Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-100 px-4 py-6 rounded-lg shadow-md hover:border-red-600 hover:shadow-lg">
                <i className="fas fa-hands-helping text-red-700 text-5xl mb-3"></i>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <CountUp start={0} end={2} duration={5} />
                  <span className=" ml-1">yrs</span>
                </h2>
                <p className="leading-relaxed">Experience</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-100 px-4 py-6 rounded-lg shadow-md hover:border-red-600 hover:shadow-lg">
                <i className="fas fa-percentage text-red-700 text-5xl mb-3"></i>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <CountUp start={0} end={8} duration={5} />
                  <span className=" ml-2">/ 10</span>
                </h2>
                <p className="leading-relaxed">College Percentile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Slider {...settings}>
            <div className=" w-96 mx-auto text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-red-800 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-gradient-to-br from-red-600 to-red-900 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
            <div className=" w-96 mx-auto text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-red-800 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-gradient-to-br from-red-600 to-red-900 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
            <div className=" w-96 mx-auto text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-red-800 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-gradient-to-br from-red-600 to-red-900 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
            <div className=" w-96 mx-auto text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-red-800 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-gradient-to-br from-red-600 to-red-900 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
            <div className=" w-96 mx-auto text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-red-800 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-gradient-to-br from-red-600 to-red-900 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;
